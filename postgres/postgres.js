const { Client } = require("pg");
//const { rows } = require("pg/lib/defaults");
const md5 = require("md5");

let user_arg = process.argv[2];

const client = new Client({
    user: "ssv",
    host: "10.38.70.54",
    database: "fzvkr",
    password: "ssv",
    port: 5432,
});
client.connect();

client.query(
    `SELECT * from ssv.users where upper(user_surname) = upper('${user_arg}')`,
    //`SELECT * from ssv.users where upper(user_surname) = upper('СЫЛКА')`, //${user_arg}')`,
    // ["node hero"],
    function(err, result) {
        if (err) {
            return console.error("error happened during query", err);
        }
        console.log(result);
        let user = result.rows.find((item) => item.user_login == "fzv_k447");
        console.log(user);
        const hash = md5(user.user_id + "123").toUpperCase();
        if ((user.user_password = hash)) {
            console.log(
                user.user_surname +
                " " +
                user.user_first_name +
                " " +
                user.user_patronymic
            );
            console.log("ХЭШ    " + hash);
            console.log("Пароль " + user.user_password);
        }
        process.exit(0);
    }
);