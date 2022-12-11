import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    scenarios: {
        per_vu_scenario: {
            executor: "per-vu-iterations",
            vus: 10,
            iterations: 20,
            startTime: "0s",
        },
    },
};

export default () => {
    const res = http.get("http://localhost:3000/api/cart");

    check(res, {
        "is status 200": (res) => res.status === 200,
    });

    sleep(1);
};