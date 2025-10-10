import React, { useEffect, useState } from 'react';
import { User } from '../types';
import { ArrowLeftIcon, DownloadIcon, PaperAirplaneIcon } from '../components/Icons';
import { pdfService } from '../services/pdfService';
import { emailService } from '../services/emailService';


interface CertificateProps {
  user: User;
  onBack: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ user, onBack }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isEmailing, setIsEmailing] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState<boolean | null>(null);

    const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const CERTIFICATE_ID = 'completion-certificate';

    const handleDownload = async () => {
        setIsDownloading(true);
        await pdfService.downloadCertificate(CERTIFICATE_ID, `${user.name}_MidnightTreats_Certificate`);
        setIsDownloading(false);
    };

    const handleEmail = async () => {
        setIsEmailing(true);
        setEmailSuccess(null);
        const blob = await pdfService.generateCertificateBlob(CERTIFICATE_ID);
        if (blob) {
            const result = await emailService.sendCertificate(user.name, user.email, blob);
            setEmailSuccess(result.success);
        } else {
            setEmailSuccess(false);
        }
        setIsEmailing(false);
    };


    return (
        <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-gray-900 dark:text-white font-sans p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">
                <button onClick={onBack} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeftIcon className="h-5 w-5" />
                    Back to Dashboard
                </button>
                
                <div id={CERTIFICATE_ID} className="bg-white text-gray-800 p-8 sm:p-12 aspect-[1.414/1] relative overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 border-[12px] border-brand-blue"></div>
                   <div className="absolute inset-4 border-2 border-brand-blue"></div>
                   
                   <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                      <img src="https://storage.googleapis.com/aai-web-samples/prompt-images/51352e67-d867-4e94-a957-a36c92d54e4f.png" alt="Midnight Treats Logo" className="w-32 mb-4" />
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

                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button onClick={handleDownload} disabled={isDownloading} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50">
                        <DownloadIcon className="h-5 w-5" />
                        {isDownloading ? 'Downloading...' : 'Download PDF'}
                    </button>
                    <button onClick={handleEmail} disabled={isEmailing} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-700 dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50">
                        <PaperAirplaneIcon className="h-5 w-5" />
                        {isEmailing ? 'Sending...' : 'Email Certificate'}
                    </button>
                </div>
                {emailSuccess === true && <p className="text-center mt-4 text-green-600 dark:text-green-400">Certificate successfully sent!</p>}
                {emailSuccess === false && <p className="text-center mt-4 text-red-600 dark:text-red-400">Failed to send certificate. Please try again.</p>}
            </div>
        </div>
    );
};

export default Certificate;