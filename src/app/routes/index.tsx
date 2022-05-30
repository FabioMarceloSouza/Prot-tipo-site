import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { PrivateHome } from "../pages/private/home/PrivateHome";
import { ValidateToken } from '../pages/validateToken/ValidateToken';
import { Activities } from '../pages/private/activities/Activities';
import { Beneficiaries } from '../pages/private/beneficiaries/Beneficiaries';
import { MyAccount } from '../pages/private/myAccount/MyAccount';
import { Transfer } from '../pages/private/transfer/Transfer';
import { BeneficiariesTransfer } from '../pages/private/beneficiaries_transfer/BeneficiariesTransfer';
import { ActivitiesDetails } from '../pages/private/activities_details/ActivitiesDetails';
import { BeneficiaryReceive } from '../pages/private/beneficiary_receive/BeneficiaryReceive';
import { Payment } from '../pages/private/payment/Payment';
import { Success } from '../pages/private/success/Success';


// TODO: examplo de lazyload
// const LoginRegister = React.lazy(() => import(/*webpackChunkName: "login-register" */ "../pages/login-register/LoginRegister")
// .then(m => ({ default: m.LoginRegister}) ))

export const RoutesRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/validate-token" element={<ValidateToken />} />

                <Route path="/transfer" element={<Transfer />} />
                <Route path="/transfer/beneficiaries" element={<BeneficiariesTransfer />} />
                <Route path="/transfer/beneficiary-receive" element={<BeneficiaryReceive />} />
                <Route path="/transfer/payment" element={<Payment />} />
                <Route path="/transfer/success" element={<Success />} />

                <Route path="/private" element={<PrivateHome />} />
                <Route path="/private/activities" element={<Activities />}/>
                <Route path="/private/activities/details" element={<ActivitiesDetails />} />
                <Route path="/private/beneficiaries" element={<Beneficiaries />} />
                <Route path="/private/my-account" element={<MyAccount />} />

            </Routes>
        </BrowserRouter>
    )
};

