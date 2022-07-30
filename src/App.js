import {useSelector} from "react-redux";
import {MESSAGES} from "./Intl/messages";
import {IntlProvider} from "react-intl";
import AppRoutes from "./Routes";

const App = () => {
    const {mainIntl} = useSelector(store => store);
    return (
        <IntlProvider locale={mainIntl} messages={MESSAGES[mainIntl]}>
            <AppRoutes />
        </IntlProvider>
    );
}
export default App;

