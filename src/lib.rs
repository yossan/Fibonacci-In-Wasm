mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub struct Fibonacci;

#[wasm_bindgen]
impl Fibonacci {
    pub fn get_nth(&self, nth: u64) -> u64 {
        if nth == 0 || nth == 1 {
            return 0;
        } else if nth == 2 {
            return 1;
        }

        let mut i = 0_u64;
        let mut j = 1_u64;
        let mut k = i + j;
        for _ in 3..nth {
            i = j;
            j = k;
            k = i + j;
        }

        return k;
    }
}


#[wasm_bindgen]
pub fn fibonacci_cal() -> Fibonacci {
    Fibonacci
}
