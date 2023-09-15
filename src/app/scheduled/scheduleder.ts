import {getEmailModel} from "../mongo-models/abtest/emailModel";
import {sendEmail} from "../util/emailUtil";
import {waitListReady} from "../../content/email-templates/authEmails";

const ONE_WEEK_IN_MS = 1000 * 60 * 60 * 24 * 7;
const TEN_MINUTES_IN_MS = 600000;

const scheduleWaitingListReadyEmail = () => {
    setInterval(async () => {
        try {
            const emailDocs = await getEmailModel().find();
            for (const doc of emailDocs) {
                if (!doc.emailSent && doc.email && (new Date().getTime() - doc.createdAt.getTime()) > ONE_WEEK_IN_MS) {
                    const {subject, body} = waitListReady("Unknown");
                    const [res] = await sendEmail(doc.email, subject, body);
                    if (res.statusCode < 299 && res.statusCode >= 200) {
                        doc.emailSent = "yes";
                        await doc.save();
                    }
                }
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }, TEN_MINUTES_IN_MS);
};


const scheduleAll = () => {
    scheduleWaitingListReadyEmail();
};
export default scheduleAll