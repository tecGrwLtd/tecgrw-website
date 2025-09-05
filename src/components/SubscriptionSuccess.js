import React from 'react'

const SubscriptionSuccess = () => {
  return (
      <div className="space-y-4 min-w-0">
        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex justify-between items-center">
          <span className="text-green-400 text-sm">✓ Subscribed!</span>
          <button onClick={() => setIsSuccess(false)} className="text-green-400 hover:text-green-300">✕</button>
        </div>
      </div>
  )
}

export default SubscriptionSuccess