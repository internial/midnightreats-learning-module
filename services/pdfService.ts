
// Add declarations for the global objects from the CDN scripts
declare const jspdf: any;
declare const html2canvas: any;

export const pdfService = {
  downloadCertificate: async (elementId: string, filename: string): Promise<void> => {
    const certificateElement = document.getElementById(elementId);
    if (!certificateElement) {
      console.error("Certificate element not found!");
      return;
    }

    try {
      const canvas = await html2canvas(certificateElement, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = jspdf;
      // 'l' for landscape, 'px' for pixels, 'a4' for size
      const pdf = new jsPDF('l', 'px', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const ratio = canvasWidth / canvasHeight;
      const widthInPdf = pdfWidth;
      const heightInPdf = widthInPdf / ratio;

      let y = 0;
      if (heightInPdf < pdfHeight) {
          y = (pdfHeight - heightInPdf) / 2;
      }
      
      pdf.addImage(imgData, 'PNG', 0, y, widthInPdf, heightInPdf);
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  },

  generateCertificateBlob: async (elementId: string): Promise<Blob | null> => {
    const certificateElement = document.getElementById(elementId);
    if (!certificateElement) {
      console.error("Certificate element not found!");
      return null;
    }

    try {
      const canvas = await html2canvas(certificateElement, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
       const { jsPDF } = jspdf;
      const pdf = new jsPDF('l', 'px', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;
      const widthInPdf = pdfWidth;
      const heightInPdf = widthInPdf / ratio;
      let y = (pdfHeight - heightInPdf) / 2;
      
      pdf.addImage(imgData, 'PNG', 0, y, widthInPdf, heightInPdf);
      return pdf.output('blob');
    } catch (error) {
      console.error("Error generating PDF blob:", error);
      return null;
    }
  }
};
