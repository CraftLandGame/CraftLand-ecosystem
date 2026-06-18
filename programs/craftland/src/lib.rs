use anchor_lang::prelude::*;

declare_id!("CrAfTLand1111111111111111111111111111111");

#[program]
pub mod craftland {
    use super::*;

    pub fn initialize_player(
        ctx: Context<InitializePlayer>
    ) -> Result<()> {
        let player = &mut ctx.accounts.player;

        player.level = 1;
        player.coins = 0;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializePlayer<'info> {
    #[account(init, payer = user, space = 8 + 64)]
    pub player: Account<'info, PlayerAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[account]
pub struct PlayerAccount {
    pub level: u32,
    pub coins: u64,
}
