// 导入路由创建函数
import { createBrowserRouter } from 'react-router-dom';
import  Home from '@/pages/Home';
import  Detail from '@/pages/details';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home />,
  },
  {
    path: '/detail',
    element:<Detail />,
  }
]);

export default router;