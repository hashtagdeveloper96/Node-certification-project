import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { applicationRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MustMatchDirective } from 'src/app/directives/must-match.directive';
import { LoginComponent } from './login/login.component';
import { RegistrationService } from './services/registration.service';
import { AuthGuard } from './services/auth-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AddAdminComponent } from './add-admin/add-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    MustMatchDirective,
    LoginComponent,
    ProductDetailComponent,
    CheckoutComponent,
    OrderComponent,
    OrdersComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    ManageProductsComponent,
    ManageUsersComponent,
    ManageOrdersComponent,
    AddProductComponent,
    ProductUpdateComponent,
    UserUpdateComponent,
    AddUserComponent,
    ManageAdminsComponent,
    AdminUpdateComponent,
    AddAdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [RegistrationService, AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
