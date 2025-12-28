import { Icon } from '../Icons';

const DepositsView = () => {
  const deposits = [
    {
      id: 1,
      date: '2024-01-10',
      client: 'TechStart Inc.',
      amount: '₹15,000',
      status: 'released',
      description: 'Initial Concepts milestone',
      transactionId: 'TXN-20240110-001',
    },
    {
      id: 2,
      date: '2024-01-05',
      client: 'HealthCare Plus',
      amount: '₹30,000',
      status: 'pending',
      description: 'Marketing Strategy project',
      transactionId: 'TXN-20240105-002',
    },
    {
      id: 3,
      date: '2023-12-20',
      client: 'RetailMax',
      amount: '₹25,000',
      status: 'released',
      description: 'Brand Campaign milestone',
      transactionId: 'TXN-20231220-003',
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">Deposits</h1>
          <p className="text-sm text-charcoal-light">Complete audit trail of all deposit transactions</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-[#F7F7F7]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-charcoal-dark">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-charcoal-dark">Client</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-charcoal-dark">Description</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-charcoal-dark">Transaction ID</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-charcoal-dark">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-charcoal-dark">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {deposits.map((deposit) => (
                  <tr key={deposit.id} className="hover:bg-offwhite smooth-transition">
                    <td className="px-4 py-3 text-xs text-charcoal-dark font-medium">{deposit.date}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                          <Icon name="building" className="w-3 h-3 text-black" />
                        </div>
                        <span className="font-semibold text-xs text-charcoal-dark">{deposit.client}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-charcoal-light">{deposit.description}</td>
                    <td className="px-4 py-3 text-xs text-charcoal-light font-mono">{deposit.transactionId}</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-sm text-charcoal-dark">{deposit.amount}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                        deposit.status === 'released'
                          ? 'bg-primary-light text-primary-dark'
                          : 'bg-primary-light text-primary-dark'
                      }`}>
                        {deposit.status === 'released' ? (
                          <>
                            <Icon name="released" className="w-3 h-3 text-primary" />
                            Released
                          </>
                        ) : (
                          <>
                            <Icon name="pending" className="w-3 h-3 text-primary" />
                            Pending
                          </>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 p-4">
            {deposits.map((deposit) => (
              <div key={deposit.id} className="card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="building" className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-charcoal-dark">{deposit.client}</p>
                        <p className="text-xs text-charcoal-light">{deposit.date}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                      deposit.status === 'released'
                        ? 'bg-primary-light text-primary-dark'
                        : 'bg-primary-light text-primary-dark'
                    }`}>
                      {deposit.status === 'released' ? (
                        <>
                          <Icon name="released" className="w-3 h-3 text-primary" />
                          Released
                        </>
                      ) : (
                        <>
                          <Icon name="pending" className="w-3 h-3 text-primary" />
                          Pending
                        </>
                      )}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-light mb-1">Description</p>
                    <p className="text-sm text-charcoal-dark">{deposit.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-charcoal-light mb-1">Transaction ID</p>
                      <p className="text-xs text-charcoal-dark font-mono">{deposit.transactionId}</p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-light mb-1">Amount</p>
                      <p className="font-bold text-sm text-charcoal-dark">{deposit.amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-charcoal-dark mb-1">Total Deposits Released</h3>
              <p className="text-lg sm:text-xl font-bold text-primary-dark">₹70,000</p>
            </div>
            <div className="text-left sm:text-right">
              <h3 className="text-xs sm:text-sm font-bold text-charcoal-dark mb-1">Pending Release</h3>
              <p className="text-lg sm:text-xl font-bold text-primary-dark">₹35,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositsView;
