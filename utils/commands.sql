SELECT
    MAX(temp) AS max_temp,
    MAX(humi) AS max_humi,
    MAX(moist) AS max_moist,
    MAX(n) AS max_n,
    MAX(p) AS max_p,
    MAX(k) AS max_k
FROM
    store;

SELECT
    MIN(temp) AS min_temp,
    MIN(humi) AS min_humi,
    MIN(moist) AS min_moist,
    MIN(n) AS min_n,
    MIN(p) AS min_p,
    MIN(k) AS min_k
FROM
    store;

SELECT
    AVG(temp) AS avg_temp,
    AVG(humi) AS avg_humi,
    AVG(moist) AS avg_moist,
    AVG(n) AS avg_n,
    AVG(p) AS avg_p,
    AVG(k) AS avg_k
FROM
    store;

