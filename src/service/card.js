import { $pay } from "./axios";

function getHolidayCard(uid) {
    return $pay().get("/api/event/trigger/history");
}
export { getHolidayCard };
