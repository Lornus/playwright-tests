import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import {checkElementEditable} from "../../../helpers/expects";

test('input fields are editable', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    const fields = [loginPage.inputUserNameField, loginPage.inputPasswordField];

    await Promise.all(fields.map(async field => {
                await checkElementEditable(page, field);
            }
        )
    )

})