import Review from '../models/reviewModel.js';

export const createReview = async (req, res) => {
  try {
    const { name, comment } = req.body;

    if (!name || !comment) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const review = await Review.create({
      name,
      comment
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getallReview = async (req, res) => {
  const review = await Review.find();
  res.json(review);
};
