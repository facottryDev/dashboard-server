import Counter from '../models/counterModel.js';

export const getNextSequence = async (name) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      name, 
      { $inc: { seq: 1 } }, 
      { new: true, upsert: true }
    );
  
    return counter.seq;
  } catch (error) {
    return error;
  }
}