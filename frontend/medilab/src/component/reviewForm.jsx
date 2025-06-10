import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/review', { name, comment });
      toast.success(res.data.message || 'Review submitted!');
      setName('');
      setComment('');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to submit review');
    }
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Write a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Your Review</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
