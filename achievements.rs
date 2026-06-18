use anchor_lang::prelude::*;

#[account]
pub struct Achievement {
    pub owner: Pubkey,
    pub achievement_id: u32,
    pub unlocked_at: i64,
}
