import express from 'express';
import { GetFoodAvailability, GetFoodsIn30Mins, GetTopRestaurants, RestaurantsById, SearchFoods } from '../controllers';

const router = express.Router();

router.get('/:pincode', GetFoodAvailability);

router.get('/top-restaurants/:pincode', GetTopRestaurants);

router.get('/foods-in-30-min/:pincode', GetFoodsIn30Mins);

router.get('/search/:pincode', SearchFoods);

router.get('/restaurant/:id', RestaurantsById);

export { router as ShoppingRoutes };