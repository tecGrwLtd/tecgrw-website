const SubscriptionStatus = ({ fail, onClose }) => {
  return (
    <div className="space-y-4 min-w-0">
      <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>

      <div
        className={`${
          fail ? "bg-gray-500/10 border-red-500/20" : "bg-green-500/10 border-green-500/20"
        } rounded-lg p-3 flex justify-between items-center`}
      >
        <div className="flex flex-col">
          <span
            className={`text-sm ${fail ? "text-red-400" : "text-green-400"}`}
          >
            {fail ? "✕ Subscription failed!" : "✓ Subscribed!"}
          </span>
          {fail ? (
            <p className="text-red-400 text-xs mt-1">Please try again!</p>
          ): (
            <p className="text-green-400 text-xs mt-1">Please Check your email(including spam folder)</p>
          )}
        </div>

        <button
          onClick={onClose}
          className={`${
            fail ? "text-red-400 hover:text-red-300" : "text-green-400 hover:text-green-300"
          }`}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SubscriptionStatus;
