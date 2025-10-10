// Add declarations for the global objects from the CDN scripts
// This tells TypeScript that `jspdf` and `html2canvas` exist in the global scope.
declare const jspdf: any;
declare const html2canvas: any;

/**
 * A service object for handling PDF-related operations.
 */
export const pdfService = {
  /**
   * Renders a DOM element to a canvas and downloads it as a PDF.
   * @param {string} elementId The ID of the DOM element to capture.
   * @param {string} filename The desired filename for the downloaded PDF (without extension).
   */
  downloadCertificate: async (elementId: string, filename: string): Promise<void> => {
    const certificateElement = document.getElementById(elementId);
    if (!certificateElement) {
      console.error("Certificate element not found!");
      return;
    }

    try {
      // Use html2canvas to capture the element. Scale improves resolution.
      const canvas = await html2canvas(certificateElement, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = jspdf;
      
      // Initialize jsPDF in landscape, pixels, and A4 size.
      const pdf = new jsPDF('l', 'px', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calculate the image dimensions to fit the PDF width while maintaining aspect ratio.
      const ratio = canvasWidth / canvasHeight;
      const widthInPdf = pdfWidth;
      const heightInPdf = widthInPdf / ratio;

      // Center the image vertically if it's smaller than the PDF height.
      let y = 0;
      if (heightInPdf < pdfHeight) {
          y = (pdfHeight - heightInPdf) / 2;
      }
      
      // Add the captured image to the PDF and save it.
      pdf.addImage(imgData, 'PNG', 0, y, widthInPdf, heightInPdf);
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  },
};
