#![no_std]

use soroban_sdk::{
    contract, contractimpl, contracttype, symbol_short,
    Address, Env, Symbol
};

#[contract]
pub struct Crowdfund;

#[contracttype]
pub struct Campaign {
    pub owner: Address,
    pub goal: i128,
    pub total_raised: i128,
}

const CAMPAIGN: Symbol = symbol_short!("CAMP");

#[contractimpl]
impl Crowdfund {

    // Initialize campaign
    pub fn initialize(env: Env, owner: Address, goal: i128) {

        if env.storage().instance().has(&CAMPAIGN) {
            panic!("Already initialized");
        }

        let campaign = Campaign {
            owner,
            goal,
            total_raised: 0,
        };

        env.storage().instance().set(&CAMPAIGN, &campaign);
    }

    // Donate
    pub fn donate(env: Env, amount: i128) {

        if amount <= 0 {
            panic!("Amount must be greater than 0");
        }

        let mut campaign: Campaign =
            env.storage().instance().get(&CAMPAIGN).unwrap();

        campaign.total_raised += amount;

        env.storage().instance().set(&CAMPAIGN, &campaign);
    }

    // Get total
    pub fn get_total(env: Env) -> i128 {
        let campaign: Campaign =
            env.storage().instance().get(&CAMPAIGN).unwrap();

        campaign.total_raised
    }

    // Get goal
    pub fn get_goal(env: Env) -> i128 {
        let campaign: Campaign =
            env.storage().instance().get(&CAMPAIGN).unwrap();

        campaign.goal
    }
}