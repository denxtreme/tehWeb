import { Subscriptions } from "../components/subscriptions";
import { NavBar } from "../components/navbar";
import { Abonamente } from "../components/abonamente";
import { FooterOb } from "../components/Footer";

function SubscriptionPage() {
    return (
        <div className="Shop">
            <NavBar />
            <Abonamente />
            <Subscriptions/>
            <FooterOb />
        </div>
    );
}

export default SubscriptionPage