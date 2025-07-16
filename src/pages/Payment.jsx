import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Payment = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paying', amount, 'to', recipient);
  };

  return (
    <div className="min-h-screen bg-secondary p-6 flex justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-card">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Send Money</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Recipient Email" value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="friend@mail.com" />
          <Input label="Amount (USD)" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="100.00" />
          <Button full variant="primary">Pay $ {amount || '0.00'}</Button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
