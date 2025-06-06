'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) {
        setVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            role="dialog"
            aria-live="polite"
          >
            <p className="text-sm sm:text-base font-medium text-center sm:text-left">
              We use cookies and similar technologies for basic analytics provided by our hosting provider.{' '}
              <button
                onClick={() => setShowModal(true)}
                className="underline hover:text-yellow-900 transition"
              >
                Learn more
              </button>
            </p>
            <button
              onClick={handleAccept}
              className="bg-black text-yellow-400 px-5 py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-yellow-600 hover:text-black transition duration-200"
              aria-label="Accept cookies"
            >
              Accept
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal / Layer */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
            style={{ zIndex: 1110 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black max-w-lg w-full rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">Cookie and Analytics Information</h2>

              <p className="text-sm leading-relaxed mb-4">
                This website uses basic cookies and similar technologies strictly for analytics provided by our hosting provider. 
                These cookies help us understand general usage trends and improve our website experience.
              </p>

              <p className="text-sm leading-relaxed mb-4">
                We do not collect personal data or use third-party tracking systems. All analytics are anonymous and used solely to monitor performance and technical reliability.
              </p>

              <p className="text-sm leading-relaxed mb-4">
                The data is provided automatically by our hosting provider as part of the services we purchased. We use this information exclusively to calculate internal statistics, analyze site usage, and monitor downloads.
              </p>

              <p className="text-sm leading-relaxed mb-4">
                This information is **never shared with third parties** under any circumstance.
              </p>

              <p className="text-sm leading-relaxed mb-4">
                By continuing to use this website, you agree to the basic analytics tracking as described above. You can opt-out at any time by clearing your browser's local storage.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-black hover:text-red-500 text-lg font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
