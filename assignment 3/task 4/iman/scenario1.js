import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    scenarios: {
        ramping_arrival_scenario: {
            executor: "ramping-arrival-rate",
            startRate: 3,
            timeUnit: "1s",
            preAllocatedVUs: 3,
            maxVUs: 30,
            stages: [{
                target: 18,
                duration: "33s",
            }]
        },
    }
};

export default () => {
    const res = http.get("http://localhost:3000/api/addToCart");

    check(res, {
        "is status 404": (res) => res.status === 404,
    });

    sleep(1);

}