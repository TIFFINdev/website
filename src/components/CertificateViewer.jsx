import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Award, XCircle, Download, Share2, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';
// import React, {  } from "react";
import axios from "axios";




const CertificateViewer = () => {

    const [certificatesDb, setCertificatesDb] = useState({});
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        axios
            .get("https://admin-tiffin.onrender.com/get_all_employees")
            .then((response) => {
                const formattedData = response.data.reduce((acc, emp) => {
                    acc[emp.intern_id] = {
                        name: emp.name,
                        role: emp.post || "Intern",
                        period: emp.duration === "NA" ? "Two months" : emp.duration,
                        description: emp.text,
                        issueDate: "2025", // Modify if issue date is available
                        image: emp.certificate_link, // Assuming this is the certificate image link
                    };
                    return acc;
                }, {});

                setCertificatesDb(formattedData);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Even on error, stop loading
            });
    }, []);

      console.log(certificatesDb);

    const { id } = useParams();
    const imageRef = useRef(null);


    const certificate = certificatesDb[id];
    if (loading) {
        return <div className='h-[100vh] flex align-center justify-center'>Loading data...</div>;
    }

    const handleShare = async () => {
        try {
            const shareUrl = `${window.location.origin}/certificate/${id}`;
            await navigator.clipboard.writeText(shareUrl);
            alert('Certificate link copied to clipboard!');
        } catch (err) {
            alert('Failed to copy link. Please copy the URL manually.');
        }
    };

    const handleDownloadPDF = () => {
        if (!imageRef.current) return;

        // Create a new jsPDF instance
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [800, 600] // Adjust to match your image size
        });

        // Add the image to the PDF
        pdf.addImage(
            imageRef.current.src,
            'JPEG',
            0,
            0,
            800,
            600 // Full width and height of the image
        );

        // Save the PDF with the certificate holder's name
        pdf.save(`Tiffin_Certificate_${certificate.name.replace(/\s+/g, '_')}.pdf`);
    };

    return (
        <div className="min-h-[120vh] py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-4xl w-full">
                {/* Certificate Container */}
                {certificate ? (
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
                        {/* Header */}
                        <div className="bg-[#7842E4] text-white py-6 px-8 text-center">
                            <Award className="mx-auto h-12 w-12 mb-4" />
                            <h1 className="text-3xl font-bold">Certificate of Achievement</h1>
                            <p className="text-sm opacity-80">Tiffin Excellence Recognition Program</p>
                        </div>

                        {/* Certificate Content */}
                        <div className="grid md:grid-cols-2 gap-8 p-8">
                            {/* Image Section */}
                            <div className="flex items-center justify-center">
                                <img
                                    ref={imageRef}
                                    src={certificate.image}
                                    alt={`Certificate for ${certificate.name}`}
                                    className="rounded-lg shadow-md max-h-80 object-cover"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold text-gray-900">{certificate.name}</h2>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center">
                                        <CheckCircle className="h-4 w-4 mr-1" />
                                        Verified
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Role</dt>
                                        <dd className="text-lg text-gray-900 font-semibold">{certificate.role}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Period</dt>
                                        <dd className="text-base text-gray-800">{certificate.period}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Description</dt>
                                        <dd className="text-base text-gray-700 italic">{certificate.description}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Issue Date</dt>
                                        <dd className="text-base text-gray-800">{certificate.issueDate}</dd>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-4 mt-6">
                                    <button
                                        onClick={handleDownloadPDF}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#7842E4] text-white rounded-md hover:bg-[#6030D0] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7842E4]"
                                    >
                                        <Download className="h-5 w-5" />
                                        Download PDF
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                                    >
                                        <Share2 className="h-5 w-5" />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl p-12 text-center">
                        <XCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificate Not Found</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            The certificate link you've accessed appears to be invalid or has expired. Please contact our support team for assistance.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateViewer;