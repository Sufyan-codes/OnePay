import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => (
    <section className="bg-[#510453] text-white py-28 text-center flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl  font-bold  mb-6 mt-6"
        >
      Opps! Looks like <br />
      you`re lost
    </motion.h1>
    <p>Thepage you are looking for is not here, but dont <br />
      worry, we`ll help you get back on track.</p>
    <div className="mt-4">
    <Link to='/' className="bg-yellow-600 text-black px-6 py-2 rounded-md font-medium shadow hover:scale-105 transition">Go Home</Link>
    </div>
    <p>if you think this is an error, contact our support team <Link to='/contact' > <span className="text-yello-600">support@ondepay.com</span></Link></p>
    </section>
  );
  
  export default NotFound;
  