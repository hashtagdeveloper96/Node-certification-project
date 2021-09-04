import { Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserUpdateComponent } from './user-update/user-update.component';

export const applicationRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-admins', component: ManageAdminsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'admin-update/:id', component: AdminUpdateComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-admin', component: AddAdminComponent },
];
