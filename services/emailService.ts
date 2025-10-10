
// This is a mock service. In a real application, this would make an API call to a backend server.
export const emailService = {
  sendCertificate: async (name: string, email: string, pdfBlob: Blob): Promise<{ success: boolean }> => {
    // The recipient email is hardcoded as per the instructions.
    const recipientEmail = "rockwirez@gmail.com";
    
    console.log(`Simulating sending certificate for ${name} to ${recipientEmail}...`);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', recipientEmail);
    formData.append('certificate', pdfBlob, `${name}_MidnightTreats_Certificate.pdf`);

    // In a real app, you would use fetch() to POST this formData to your backend.
    // For example:
    // await fetch('/api/send-certificate', { method: 'POST', body: formData });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Email simulation complete.");
    return { success: true };
  }
};
