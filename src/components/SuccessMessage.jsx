import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessMessage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="w-16 h-16 bg-[#b2c935] rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="w-8 h-8 text-[#231f1f]" />
          </div>
          <h2 className="text-2xl font-bold text-[#231f1f] mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out to Tecgrw. We'll get back to you within 24 hours.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handleGoHome}
              className="w-full bg-[#b2c935] text-[#231f1f] px-6 py-3 rounded-lg hover:bg-[#095aa3] hover:text-white transition-colors font-medium"
            >
              Back to Home
            </button>
            
            <p className="text-sm text-gray-500">
              Redirecting in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;