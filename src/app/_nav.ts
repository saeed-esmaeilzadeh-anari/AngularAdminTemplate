import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'داشبورد',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'جدید'
    }
  },
  {
    name: 'اطلاعات پایه',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'استان ها',
        url: '/base/province',
        icon: 'icon-puzzle'
      },
      {
        name: 'افزودن استان جدید',
        url: '/base/province/add',
        icon: 'icon-puzzle'
      },
      {
        name: 'شهرها',
        url: '/base/city',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'فروشگاه',
    url: '/store',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'گروه بندی محصولات',
        url: '/store',
        icon: 'icon-puzzle'
      },
      {
        name: 'گروه بندی از روی سرور',
        url: '/store/categoryWithAPI',
        icon: 'icon-puzzle'
      },
      {
        name: 'افزودن گروه جدید',
        url: '/store/category/add',
        icon: 'icon-puzzle'
      },
      {
        name: 'افزودن گروه جدید ورژن ریکتیو فرم',
        url: '/store/category/addWithReactive',
        icon: 'icon-puzzle'
      },
    ]
  },
];
