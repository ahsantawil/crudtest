// Kode : Alias di Export

const company = "ahsantawil.space";

function sum(first, second) {
    return first + second;
}

class Company {

}

// export {company as perusahaan, sum as total, Company as Perusahaan};  // Alias pada export tidak direkomendasikan
export {company, sum, Company}; 