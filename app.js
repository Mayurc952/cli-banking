const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const { userInfo } = require("os");
const rl = readline.createInterface({ input, output });

const userData = [
  {
    name: "amol",
    amount: 2000,
    place: "mumbai",
    phone: "981234",
  },
  {
    name: "rohit",
    amount: 2500,
    place: "mumbai",
    phone: "971234",
  },
  {
    name: "rohini",
    amount: 3000,
    place: "pune",
    phone: "961234",
  },
  {
    name: "mahesh",
    amount: 3500,
    place: "pune",
    phone: "951234",
  },
];
const services = ["user", "create account"];

const userInfos = (user) => {
  rl.question("please provide Username \n ", (username) => {
    user(username);
  });
};

const debit = (userPersonalInfo) => {
  rl.question("please write amount to Debit  \n", (deb) => {
    // const x=Number(deb)
    if (deb > userPersonalInfo[0].amount) {
      console.log("\n not sufficient balance!! \n");
      debit(userPersonalInfo);
    } else {
      userPersonalInfo[0].amount = userPersonalInfo[0].amount - deb;

      console.log(`\n amout of Rs ${deb} is debited from your account \n remaining balance : Rs ${userPersonalInfo[0].amount}
            \n -----------`);
      console.table(userPersonalInfo);
      console.log("\n Thank for visiting City Bank \n --------------");
      rl.close();
    }
  });
};
const credit = (userPersonalInfo) => {
  rl.question("enter amount to be credited \n", (amt) => {
    userPersonalInfo[0].amount = userPersonalInfo[0].amount + Number(amt);
    console.log(`\n amout of Rs ${amt} is credited into your account \n new  balance : Rs ${userPersonalInfo[0].amount}
        \n /////////////////////////`);
    console.table(userPersonalInfo);

    console.log("\n Thank for visiting pro Bank \n ///////////////////////");
    rl.close();
  });
};
const debcred = (userPersonalInfo) => {
  (() => {
    console.table(userPersonalInfo);
    rl.question("do you want to Debit/Credit amount y/n \n", (answer) => {
      if (answer == "y") {
        rl.question("1 for Debit , 2 for credit \n", (answer) => {
          if (answer == 1) {
            debit(userPersonalInfo);
          } else if (answer == 2) {
            credit(userPersonalInfo);
          } else {
            console.log("please select correct option !! \n");
            debcred(userPersonalInfo);
          }
        });
      } else rl.close();
    });
  })();
};
const createUser = (usr) => {
  rl.question("what is your name \n", (nam) => {
    rl.question("amount you want to add \n", (amt) => {
      rl.question("where do you live? \n", (place) => {
        rl.question("phone number \n", (phone) => {
          let data = {
            name: nam,
            amount: Number(amt),
            place: place,
            phone: phone,
          };
          usr(data);
        });
      });
    });
  });
};

const serviceOpt = () => {
  console.table(services);
  rl.question(
    "Wellcome to CityBank! please Choose from  the following Services \n",
    (ser) => {
      if (ser == 0) {
        userInfos((user) => {
          let i = 0;
          const userPersonalInfo = userData.filter((item) => {
            return item.name == user;
          });

          userPersonalInfo.length >= 1
            ? debcred(userPersonalInfo)
            : (() => {
                console.log("user not found \n");
                rl.close();
              })();
        });
      } else if (ser == 1) {
        createUser((usr) => {
          userData.push(usr);
          console.log("\n \n user has been added \n \n ");
          console.table(userData);
          console.log("thaks for visiting city bank");
          rl.close();
        });
      } else {
        console.log("please choose correct option \n");
        serviceOpt();
      }
    }
  );
};
const CityBank = () => {
  serviceOpt();
};
CityBank();
