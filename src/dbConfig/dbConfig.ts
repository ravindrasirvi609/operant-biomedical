import mongoose from 'mongoose';

let isConnected = false;
let connectPromise: Promise<typeof mongoose> | null = null;

export async function connect() {
      if (isConnected && mongoose.connection.readyState === 1) {
            return mongoose;
      }

      if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not configured');
      }

      if (!connectPromise) {
            connectPromise = mongoose.connect(process.env.MONGO_URI, {
                  serverSelectionTimeoutMS: 10000,
            });
      }

      try {
            await connectPromise;
            isConnected = true;

            const connection = mongoose.connection;
            connection.once('connected', () => {
                  console.log('MongoDB connected successfully');
            });

            connection.once('error', (err) => {
                  console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            });

            return mongoose;
      } catch (error) {
            connectPromise = null;
            isConnected = false;
            console.log('Something goes wrong!');
            console.log(error);
            throw error;
      }
}
