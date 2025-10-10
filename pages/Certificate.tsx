import React, { useState } from 'react';
import { User } from '../types';
import { ArrowLeftIcon, DownloadIcon, LogoIcon } from '../components/Icons';
import { pdfService } from '../services/pdfService';


interface CertificateProps {
  user: User;
  onBack: () => void;
}

/**
 * A page that displays a certificate of completion for the user.
 * It provides functionality to download the certificate as a PDF.
 */
const Certificate: React.FC<CertificateProps> = ({ user, onBack }) => {
    // State to manage the downloading process visual feedback
    const [isDownloading, setIsDownloading] = useState(false);

    const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // The ID of the element that will be converted to a PDF
    const CERTIFICATE_ID = 'completion-certificate';

    /** Handles the PDF download process. */
    const handleDownload = async () => {
        setIsDownloading(true);
        await pdfService.downloadCertificate(CERTIFICATE_ID, `${user.name}_MidnightTreats_Certificate`);
        setIsDownloading(false);
    };


    return (
        <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-gray-900 dark:text-white font-sans p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">
                <button onClick={onBack} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeftIcon className="h-5 w-5" />
                    Back to Dashboard
                </button>
                
                {/* The visual certificate element */}
                <div id={CERTIFICATE_ID} className="bg-white text-gray-800 p-8 sm:p-12 aspect-[1.414/1] relative overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 border-[12px] border-brand-blue"></div>
                   <div className="absolute inset-4 border-2 border-brand-blue"></div>
                   
                   <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      <LogoIcon className="w-32 h-32 text-brand-blue mb-4" />
                      <h1 className="text-xl sm:text-2xl font-bold text-gray-600 tracking-widest uppercase">Certificate of Completion</h1>
                      <p className="text-lg sm:text-xl mt-4">This certifies that</p>
                      <p className="text-3xl sm:text-5xl font-bold text-brand-blue my-4">{user.name}</p>
                      <p className="text-lg sm:text-xl">has successfully completed the</p>
                      <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-2">Midnight Treats New Hire Onboarding Program</p>
                      <div className="mt-8 border-t-2 border-gray-300 w-1/2 mx-auto pt-4">
                        <p className="text-sm text-gray-500">Completed on: {completionDate}</p>
                      </div>
                   </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button onClick={handleDownload} disabled={isDownloading} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50">
                        <DownloadIcon className="h-5 w-5" />
                        {isDownloading ? 'Downloading...' : 'Download PDF'}
                    </button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                  After downloading, please email the PDF certificate to your manager to confirm your training completion.
                </p>
            </div>
        </div>
    );
};

export default Certificate;
