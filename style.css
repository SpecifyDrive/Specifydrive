/* =========================================================
   SPECIFYDRIVE - FUEL COST CALCULATOR
========================================================= */

function calculateFuel() {

    const fuelType = document.getElementById("fuelType").value;
    const fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    const mileage = parseFloat(document.getElementById("mileage").value);
    const distance = parseFloat(document.getElementById("distance").value);
    const result = document.getElementById("result");

    if (
        isNaN(fuelPrice) ||
        isNaN(mileage) ||
        isNaN(distance) ||
        fuelPrice <= 0 ||
        mileage <= 0 ||
        distance <= 0
    ) {
        result.innerHTML = "<p>Please enter valid details.</p>";
        return;
    }

    const fuelRequired = distance / mileage;
    const totalCost = fuelRequired * fuelPrice;
    const costPerKm = totalCost / distance;

    result.innerHTML = `
        <h3>⛽ Fuel Cost Result</h3>

        <p><strong>Fuel Type:</strong> ${fuelType}</p>

        <p><strong>Fuel Required:</strong>
        ${fuelRequired.toFixed(2)}</p>

        <p><strong>Total Fuel Cost:</strong>
        ₹${Math.round(totalCost).toLocaleString("en-IN")}</p>

        <p><strong>Cost Per KM:</strong>
        ₹${costPerKm.toFixed(2)}</p>
    `;
}


/* =========================================================
   CAR DATABASE
   Price = approximate starting ex-showroom price
   These are illustrative values for calculator testing.
========================================================= */

const cars = [

    // MARUTI SUZUKI
    {
        name: "Maruti Suzuki Alto K10",
        brand: "Maruti Suzuki",
        price: 420000,
        fuel: "Petrol",
        mileage: 24.4,
        safety: 3,
        performance: 5,
        features: 6
    },

    {
        name: "Maruti Suzuki S-Presso",
        brand: "Maruti Suzuki",
        price: 430000,
        fuel: "Petrol",
        mileage: 25.3,
        safety: 3,
        performance: 5,
        features: 6
    },

    {
        name: "Maruti Suzuki Celerio",
        brand: "Maruti Suzuki",
        price: 530000,
        fuel: "Petrol",
        mileage: 25.2,
        safety: 3,
        performance: 5,
        features: 7
    },

    {
        name: "Maruti Suzuki WagonR",
        brand: "Maruti Suzuki",
        price: 560000,
        fuel: "Petrol",
        mileage: 25.2,
        safety: 3,
        performance: 5,
        features: 7
    },

    {
        name: "Maruti Suzuki Swift",
        brand: "Maruti Suzuki",
        price: 750000,
        fuel: "Petrol",
        mileage: 24.8,
        safety: 4,
        performance: 7,
        features: 8
    },

    {
        name: "Maruti Suzuki Baleno",
        brand: "Maruti Suzuki",
        price: 700000,
        fuel: "Petrol",
        mileage: 22.9,
        safety: 4,
        performance: 7,
        features: 8
    },

    {
        name: "Maruti Suzuki Fronx",
        brand: "Maruti Suzuki",
        price: 800000,
        fuel: "Petrol",
        mileage: 22.8,
        safety: 4,
        performance: 7,
        features: 8
    },

    {
        name: "Maruti Suzuki Brezza",
        brand: "Maruti Suzuki",
        price: 850000,
        fuel: "Petrol",
        mileage: 19.8,
        safety: 5,
        performance: 7,
        features: 8
    },

    {
        name: "Maruti Suzuki Brezza CNG",
        brand: "Maruti Suzuki",
        price: 950000,
        fuel: "CNG",
        mileage: 25.5,
        safety: 5,
        performance: 6,
        features: 8
    },

    {
        name: "Maruti Suzuki Grand Vitara",
        brand: "Maruti Suzuki",
        price: 1080000,
        fuel: "Petrol",
        mileage: 21.1,
        safety: 5,
        performance: 7,
        features: 9
    },


    // TATA
    {
        name: "Tata Tiago",
        brand: "Tata",
        price: 500000,
        fuel: "Petrol",
        mileage: 20.1,
        safety: 4,
        performance: 6,
        features: 7
    },

    {
        name: "Tata Punch",
        brand: "Tata",
        price: 650000,
        fuel: "Petrol",
        mileage: 20.1,
        safety: 5,
        performance: 6,
        features: 8
    },

    {
        name: "Tata Punch CNG",
        brand: "Tata",
        price: 800000,
        fuel: "CNG",
        mileage: 26.9,
        safety: 5,
        performance: 6,
        features: 8
    },

    {
        name: "Tata Altroz",
        brand: "Tata",
        price: 650000,
        fuel: "Petrol",
        mileage: 19.3,
        safety: 5,
        performance: 7,
        features: 8
    },

    {
        name: "Tata Nexon",
        brand: "Tata",
        price: 800000,
        fuel: "Petrol",
        mileage: 17.4,
        safety: 5,
        performance: 8,
        features: 9
    },

    {
        name: "Tata Nexon CNG",
        brand: "Tata",
        price: 900000,
        fuel: "CNG",
        mileage: 24.1,
        safety: 5,
        performance: 7,
        features: 8
    },

    {
        name: "Tata Curvv",
        brand: "Tata",
        price: 1000000,
        fuel: "Petrol",
        mileage: 18.0,
        safety: 5,
        performance: 8,
        features: 9
    },

    {
        name: "Tata Harrier",
        brand: "Tata",
        price: 1500000,
        fuel: "Diesel",
        mileage: 16.8,
        safety: 5,
        performance: 9,
        features: 9
    },

    {
        name: "Tata Safari",
        brand: "Tata",
        price: 1600000,
        fuel: "Diesel",
        mileage: 16.3,
        safety: 5,
        performance: 9,
        features: 9
    },


    // HYUNDAI
    {
        name: "Hyundai Grand i10 Nios",
        brand: "Hyundai",
        price: 590000,
        fuel: "Petrol",
        mileage: 18.0,
        safety: 4,
        performance: 6,
        features: 8
    },

    {
        name: "Hyundai Exter",
        brand: "Hyundai",
        price: 650000,
        fuel: "Petrol",
        mileage: 19.4,
        safety: 4,
        performance: 6,
        features: 9
    },

    {
        name: "Hyundai i20",
        brand: "Hyundai",
        price: 750000,
        fuel: "Petrol",
        mileage: 20.0,
        safety: 4,
        performance: 7,
        features: 9
    },

    {
        name: "Hyundai Venue",
        brand: "Hyundai",
        price: 800000,
        fuel: "Petrol",
        mileage: 18.1,
        safety: 4,
        performance: 8,
        features: 9
    },

    {
        name: "Hyundai Creta",
        brand: "Hyundai",
        price: 1100000,
        fuel: "Petrol",
        mileage: 18.4,
        safety: 5,
        performance: 8,
        features: 10
    },

    {
        name: "Hyundai Alcazar",
        brand: "Hyundai",
        price: 1500000,
        fuel: "Petrol",
        mileage: 17.5,
        safety: 5,
        performance: 8,
        features: 10
    },

    {
        name: "Hyundai Tucson",
        brand: "Hyundai",
        price: 2900000,
        fuel: "Petrol",
        mileage: 13.0,
        safety: 5,
        performance: 9,
        features: 10
    },


    // MAHINDRA
    {
        name: "Mahindra XUV 3XO",
        brand: "Mahindra",
        price: 800000,
        fuel: "Petrol",
        mileage: 18.2,
        safety: 5,
        performance: 9,
        features: 9
    },

    {
        name: "Mahindra Bolero",
        brand: "Mahindra",
        price: 1000000,
        fuel: "Diesel",
        mileage: 16.0,
        safety: 4,
        performance: 7,
        features: 6
    },

    {
        name: "Mahindra Scorpio",
        brand: "Mahindra",
        price: 1350000,
        fuel: "Diesel",
        mileage: 15.0,
        safety: 5,
        performance: 9,
        features: 8
    },

    {
        name: "Mahindra Scorpio N",
        brand: "Mahindra",
        price: 1400000,
        fuel: "Diesel",
        mileage: 15.0,
        safety: 5,
        performance: 9,
        features: 9
    },

    {
        name: "Mahindra XUV700",
        brand: "Mahindra",
        price: 1400000,
        fuel: "Petrol",
        mileage: 15.0,
        safety: 5,
        performance: 10,
        features: 10
    },

    {
        name: "Mahindra Thar",
        brand: "Mahindra",
        price: 1200000,
        fuel: "Petrol",
        mileage: 15.0,
        safety: 4,
        performance: 9,
        features: 8
    },


    // KIA
    {
        name: "Kia Sonet",
        brand: "Kia",
        price: 800000,
        fuel: "Petrol",
        mileage: 18.8,
        safety: 4,
        performance: 8,
        features: 9
    },

    {
        name: "Kia Seltos",
        brand: "Kia",
        price: 1100000,
        fuel: "Petrol",
        mileage: 17.0,
        safety: 5,
        performance: 9,
        features: 10
    },

    {
        name: "Kia Carens",
        brand: "Kia",
        price: 1100000,
        fuel: "Petrol",
        mileage: 16.5,
        safety: 4,
        performance: 8,
        features: 9
    },


    // TOYOTA
    {
        name: "Toyota Glanza",
        brand: "Toyota",
        price: 700000,
        fuel: "Petrol",
        mileage: 22.9,
        safety: 4,
        performance: 7,
        features: 8
    },

    {
        name: "Toyota Urban Cruiser Hyryder",
        brand: "Toyota",
        price: 1100000,
        fuel: "Petrol",
        mileage: 21.1,
        safety: 5,
        performance: 7,
        features: 9
    },

    {
        name: "Toyota Innova Hycross",
        brand: "Toyota",
        price: 1900000,
        fuel: "Petrol",
        mileage: 21.1,
        safety: 5,
        performance: 8,
        features: 10
    },

    {
        name: "Toyota Fortuner",
        brand: "Toyota",
        price: 3400000,
        fuel: "Diesel",
        mileage: 14.6,
        safety: 5,
        performance: 10,
        features: 9
    },


    // HONDA
    {
        name: "Honda Amaze",
        brand: "Honda",
        price: 800000,
        fuel: "Petrol",
        mileage: 18.6,
        safety: 4,
        performance: 7,
        features: 8
    },

    {
        name: "Honda City",
        brand: "Honda",
        price: 1200000,
        fuel: "Petrol",
        mileage: 17.8,
        safety: 5,
        performance: 8,
        features: 9
    },

    {
        name: "Honda Elevate",
        brand: "Honda",
        price: 1200000,
        fuel: "Petrol",
        mileage: 15.3,
        safety: 5,
        performance: 8,
        features: 9
    },


    // RENAULT
    {
        name: "Renault Kwid",
        brand: "Renault",
        price: 470000,
        fuel: "Petrol",
        mileage: 22.0,
        safety: 3,
        performance: 5,
        features: 6
    },

    {
        name: "Renault Triber",
        brand: "Renault",
        price: 600000,
        fuel: "Petrol",
        mileage: 20.0,
        safety: 4,
        performance: 6,
        features: 8
    },

    {
        name: "Renault Kiger",
        brand: "Renault",
        price: 650000,
        fuel: "Petrol",
        mileage: 19.2,
        safety: 4,
        performance: 7,
        features: 8
    },


    // NISSAN
    {
        name: "Nissan Magnite",
        brand: "Nissan",
        price: 600000,
        fuel: "Petrol",
        mileage: 19.7,
        safety: 4,
        performance: 7,
        features: 8
    },


    // SKODA
    {
        name: "Skoda Kylaq",
        brand: "Skoda",
        price: 800000,
        fuel: "Petrol",
        mileage: 19.0,
        safety: 5,
        performance: 8,
        features: 9
    },

    {
        name: "Skoda Kushaq",
        brand: "Skoda",
        price: 1100000,
        fuel: "Petrol",
        mileage: 18.6,
        safety: 5,
        performance: 9,
        features: 9
    },

    {
        name: "Skoda Slavia",
        brand: "Skoda",
        price: 1100000,
        fuel: "Petrol",
        mileage: 19.0,
        safety: 5,
        performance: 9,
        features: 9
    },


    // VOLKSWAGEN
    {
        name: "Volkswagen Taigun",
        brand: "Volkswagen",
        price: 1150000,
        fuel: "Petrol",
        mileage: 19.0,
        safety: 5,
        performance: 9,
        features: 9
    },

    {
        name: "Volkswagen Virtus",
        brand: "Volkswagen",
        price: 1150000,
        fuel: "Petrol",
        mileage: 19.0,
        safety: 5,
        performance: 9,
        features: 9
    },


    // MG
    {
        name: "MG Astor",
        brand: "MG",
        price: 1000000,
        fuel: "Petrol",
        mileage: 15.5,
        safety: 5,
        performance: 8,
        features: 10
    },

    {
        name: "MG Hector",
        brand: "MG",
        price: 1500000,
        fuel: "Petrol",
        mileage: 15.5,
        safety: 5,
        performance: 8,
        features: 10
    },


    // JEEP
    {
        name: "Jeep Compass",
        brand: "Jeep",
        price: 2000000,
        fuel: "Petrol",
        mileage: 16.0,
        safety: 5,
        performance: 9,
        features: 9
    }

];


/* =========================================================
   EMI CALCULATOR
========================================================= */

function calculateEMI(principal, annualRate, years) {

    if (principal <= 0) {
        return 0;
    }

    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    const emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return emi;
}


/* =========================================================
   AFFORDABLE LOAN CALCULATOR
========================================================= */

function calculateLoanFromEMI(emi, annualRate, years) {

    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    if (monthlyRate === 0) {
        return emi * months;
    }

    return emi *
        (
            (Math.pow(1 + monthlyRate, months) - 1) /
            (
                monthlyRate *
                Math.pow(1 + monthlyRate, months)
            )
        );
}


/* =========================================================
   MERI SALARY, MERI CAR
========================================================= */

function findMyCar() {

    const salary =
        parseFloat(document.getElementById("salary").value);

    const downPayment =
        parseFloat(document.getElementById("downPayment").value);

    const tenure =
        parseInt(document.getElementById("loanTenure").value);

    const preferredFuel =
        document.getElementById("preferredFuel").value;

    const priority =
        document.getElementById("priority").value;

    const result =
        document.getElementById("carResult");


    /* VALIDATION */

    if (
        isNaN(salary) ||
        salary <= 0 ||
        isNaN(downPayment) ||
        downPayment < 0
    ) {

        result.innerHTML = `
            <p>
                Please enter a valid monthly salary
                and down payment.
            </p>
        `;

        return;
    }


    /*
        AFFORDABILITY LOGIC

        20% of salary = comfortable EMI
        25% of salary = upper EMI limit

        This is a general planning estimate,
        not financial advice.
    */

    const comfortableEMI = salary * 0.20;
    const maximumEMI = salary * 0.25;

    const annualInterest = 9;


    const comfortableLoan =
        calculateLoanFromEMI(
            comfortableEMI,
            annualInterest,
            tenure
        );

    const maximumLoan =
        calculateLoanFromEMI(
            maximumEMI,
            annualInterest,
            tenure
        );


    /*
        Add down payment to loan capacity.
    */

    const comfortableCarPrice =
        comfortableLoan + downPayment;

    const maximumCarPrice =
        maximumLoan + downPayment;


    /*
        Create a minimum range.

        This prevents the system from showing
        only ultra-cheap cars for higher salaries.
    */

    const minimumCarPrice =
        Math.max(
            350000,
            comfortableCarPrice * 0.70
        );


    /*
        FILTER BY FUEL + PRICE RANGE
    */

    let matchingCars = cars.filter(car => {

        const fuelMatch =
            preferredFuel === "Any" ||
            car.fuel === preferredFuel;

        const priceMatch =
            car.price >= minimumCarPrice &&
            car.price <= maximumCarPrice;

        return fuelMatch && priceMatch;
    });


    /*
        If very few cars are found,
        expand the range slightly.
    */

    if (matchingCars.length < 3) {

        matchingCars = cars.filter(car => {

            const fuelMatch =
                preferredFuel === "Any" ||
                car.fuel === preferredFuel;

            const expandedMin =
                Math.max(
                    300000,
                    comfortableCarPrice * 0.60
                );

            const expandedMax =
                maximumCarPrice * 1.10;

            return (
                fuelMatch &&
                car.price >= expandedMin &&
                car.price <= expandedMax
            );
        });
    }


    /*
        SCORE CARS
    */

    matchingCars.forEach(car => {

        let score = 0;


        /* AFFORDABILITY */

        const distanceFromComfort =
            Math.abs(
                car.price - comfortableCarPrice
            );

        if (
            car.price <= comfortableCarPrice
        ) {
            score += 30;
        }
        else if (
            car.price <= maximumCarPrice
        ) {
            score += 20;
        }
        else {
            score += 5;
        }


        /* PRIORITY */

        if (priority === "Mileage") {
            score += car.mileage * 2;
        }

        else if (priority === "Safety") {
            score += car.safety * 8;
        }

        else if (priority === "Performance") {
            score += car.performance * 8;
        }

        else if (priority === "Features") {
            score += car.features * 8;
        }

        else {
            score +=
                car.safety * 4 +
                car.mileage +
                car.performance * 2 +
                car.features * 2;
        }


        /*
            Slight preference toward cars
            closer to comfortable budget.
        */

        score -= distanceFromComfort / 1000000;


        car.score = score;
    });


    matchingCars.sort(
        (a, b) => b.score - a.score
    );


    /* =====================================================
       RESULT HEADER
    ===================================================== */

    let html = `

        <h3>🚗 Your Car Budget</h3>

        <p>
            <strong>Monthly Salary:</strong>
            ₹${salary.toLocaleString("en-IN")}
        </p>

        <p>
            <strong>Down Payment:</strong>
            ₹${downPayment.toLocaleString("en-IN")}
        </p>

        <p>
            <strong>Comfortable EMI:</strong>
            ₹${Math.round(
                comfortableEMI
            ).toLocaleString("en-IN")}
            / month
        </p>

        <p>
            <strong>Comfortable Car Budget:</strong>
            ₹${formatPrice(comfortableCarPrice)}
        </p>

        <p>
            <strong>Maximum Suggested Budget:</strong>
            ₹${formatPrice(maximumCarPrice)}
        </p>

        <hr style="
            margin:20px 0;
            border-color:#30363d;
        ">

        <h3>
            🚘 Cars You Can Consider
        </h3>

        <p style="
            color:#aaa;
            font-size:14px;
        ">
            Showing cars within your estimated
            affordability range.
        </p>
    `;


    /* =====================================================
       NO CAR
    ===================================================== */

    if (matchingCars.length === 0) {

        html += `

            <div class="car-card">

                <h4>
                    No exact match found
                </h4>

                <p>
                    There are currently no cars in
                    our database matching your selected
                    fuel type and estimated budget.
                </p>

                <p>
                    Try selecting
                    <strong>Any Fuel</strong>
                    to see more options.
                </p>

            </div>

        `;
    }


    /* =====================================================
       SHOW ALL MATCHING CARS
    ===================================================== */

    else {

        matchingCars.forEach((car, index) => {

            const loanAmount =
                Math.max(
                    0,
                    car.price - downPayment
                );


            const emi =
                calculateEMI(
                    loanAmount,
                    annualInterest,
                    tenure
                );


            let badge;

            if (index === 0) {
                badge = "⭐ BEST MATCH";
            }

            else if (car.price <= comfortableCarPrice) {
                badge = "✅ COMFORTABLE";
            }

            else {
                badge = "⚠️ UPPER BUDGET";
            }


            html += `

                <div class="car-card">

                    <h4>
                        ${index + 1}. ${car.name}
                    </h4>

                    <p>
                        <strong>Brand:</strong>
                        ${car.brand}
                    </p>

                    <p>
                        <strong>Approx Price:</strong>
                        ₹${formatPrice(car.price)}
                    </p>

                    <p>
                        <strong>Fuel:</strong>
                        ${car.fuel}
                    </p>

                    <p>
                        <strong>Mileage:</strong>
                        ${car.mileage} km/l
                    </p>

                    <p>
                        <strong>Estimated EMI:</strong>
                        ₹${Math.round(
                            emi
                        ).toLocaleString("en-IN")}
                        / month
                    </p>

                    <p>
                        <strong>Safety:</strong>
                        ${car.safety}/5
                    </p>

                    <p>
                        <strong>Performance:</strong>
                        ${car.performance}/10
                    </p>

                    <p>
                        <strong>Features:</strong>
                        ${car.features}/10
                    </p>

                    <span class="car-badge">
                        ${badge}
                    </span>

                </div>
            `;
        });
    }


    /* =====================================================
       DISCLAIMER
    ===================================================== */

    html += `

        <p style="
            margin-top:20px;
            font-size:12px;
            color:#888;
            line-height:1.6;
        ">
            *This is a general affordability estimate for
            informational purposes. Actual on-road prices,
            interest rates, insurance, taxes, offers and
            ownership costs can vary by city and customer.
        </p>
    `;


    result.innerHTML = html;
}


/* =========================================================
   PRICE FORMAT
========================================================= */

function formatPrice(price) {

    return Math.round(price)
        .toLocaleString("en-IN");
}
