import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    stages: [
        { target: 20, duration: '1m' },
        { target: 15, duration: '1m' },
        { target: 0, duration: '1m' },
    ],
    threshold: {
        http_reqs: ['count < 100'],
    },
};

export default () => {
    const res = http.get('http://localhost:3000/api/suggestions');
    check(res, {
        'is status 200': (res) => res.status === 200,
    })
    sleep(1)
}