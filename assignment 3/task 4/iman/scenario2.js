import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    scenarios: {
        constant_arrival_scenario: {
            executor: "constant-arrival-rate",
            rate: 3,
            duration: "25s",
            preAllocatedVUs: 3,
            maxVUs: 20,
        },
    },
};

export default () => {
    const res = http.get("http://localhost:3000/api/session");

    check(res, {
        "is status 200": (res) => res.status === 200,
    });

    sleep(1);
};