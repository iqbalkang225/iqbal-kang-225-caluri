import SearchForm from '../components/SearchForm';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';

const Search = () => {
  const { isLoading, fetchedMeals } = useSelector((store) => store.fetchedMealsSlice);

  return (
    <div className='flex flex-col'>
      <SearchForm initial={{ y: '90vh' }} animate={{ y: 0 }}></SearchForm>

      <h2 className='text-xs 2xl:text-lg 3xl:text-2xl font-bold mt-4 mb-2'>Search Results</h2>

      <div className='space-y-3 h-[calc(100vh-220px)] 2xl:h-[700px] 3xl:h-[900px] overflow-y-scroll flex flex-col'>
        {isLoading ? (
          <Loader />
        ) : (
          fetchedMeals.map((meal) => {
            return (
              <motion.div initial={{ y: `100vh` }} animate={{ y: 0 }} transition={{ delay: 0.4 }} key={meal.id}>
                <Link to={`${meal.id}`} className='flex gap-3 items-center bg-white rounded-md p-1 text-black'>
                  <img src={meal.image} className='h-12 w-12 rounded-full' />
                  <p className='text-xs 2xl:text-lg 3xl:text-2xl'> {meal.title.slice(0, 40)}... </p>
                </Link>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
