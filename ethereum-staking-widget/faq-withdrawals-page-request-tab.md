---
pageIdentification: Withdrawals_Page_Request_Tab
faq:
  - answer: Users can unstake their stETH or wstETH through withdrawals. Upon
      unstaking stETH, they will receive ETH at a 1:1 ratio. When unstaking
      wstETH, the unwrapping process will take place seamlessly in the
      background.
    question: What are withdrawals?
    questionId: What_Are_Withdrawals
  - question: How does the withdrawal process work?
    questionId: How_Does_The_Withdrawal_Process_Work
    answer: >-
      The withdrawal process is simple and has two steps:


      1. **Request withdrawal**: Lock your stETH/wstETH by issuing a withdrawal request. ETH is sourced to fulfill the request, and then locked stETH is burned, which marks the withdrawal request as claimable. Under normal circumstances, this can take anywhere between 1-5 days.

      2. **Claim**: Claim your ETH after the withdrawal request has been processed.
  - question: How do I withdraw?
    questionId: How_Do_I_Withdraw
    answer: Press the [Request tab](https://stake.lido.fi/withdrawals/request/),
      choose an amount of stETH/wstETH to withdraw, then press ‘Request
      withdrawal’. Confirm the transaction using your wallet and press ‘Claim’
      on the [Claim tab](https://stake.lido.fi/withdrawals/claim/) once it is
      ready.
  - question: Can I transform my stETH to ETH?
    questionId: Can_I_Transform_My_stETH_To_ETH
    answer: Yes. Stakers can transform their stETH to ETH 1:1 using
      the [Request](https://stake.lido.fi/withdrawals/request/) and [Claim](https://stake.lido.fi/withdrawals/claim/) tabs.
  - question: Can I transform my wstETH to ETH?
    questionId: Can_I_Transform_My_wstETH_To_ETH
    answer: Yes. You can transform your wstETH to ETH using
      the [Request](https://stake.lido.fi/withdrawals/request/) and [Claim](https://stake.lido.fi/withdrawals/claim/) tabs.
      Note that, under the hood, wstETH will unwrap to stETH first, so your
      request will be denominated in stETH.
  - answer: When you request to withdraw wstETH, it is automatically unwrapped into
      stETH, which then gets transformed into ETH. The main withdrawal period is
      when stETH is transformed into ETH. That's why you see the amount pending
      denominated in stETH.
    question: When I try to withdraw wstETH, why do I see the stETH amount in my request?
    questionId: When_I_Try_To_Withdraw_wstETH_Why_Do_I_See_The_stETH_Amount_In_My_Request
  - answer: Under normal circumstances, the stETH/wstETH withdrawal period can take
      anywhere between 1-5 days. After that, you can claim your ETH using
      the [Claim tab](https://stake.lido.fi/withdrawals/claim/).
    questionId: How_Long_Does_It_Take_To_Withdraw
    question: How long does it take to withdraw?
  - answer: |-
      * The amount of stETH in the queue.
      * Perfomance of the validator poolside.
      * Exit queue on the Beacon chain.
      * Demand for staking and unstaking.
    question: What are the factors affecting the withdrawal time?
    questionId: What_Are_The_Factors_Affecting_The_Withdrawal_Time
  - question: Do I still get rewards after I withdraw?
    questionId: Do_I_Still_Get_Rewards_After_I_Withdraw
    answer: No. After you request a withdrawal, the stETH/wstETH submitted for
      unstaking will not receive staking rewards on top of your submitted
      balance.
  - answer: There’s no withdrawal fee, but as with any Ethereum interaction, there
      will be a network gas fee. Lido does not collect a fee when you request a
      withdrawal.
    question: Is there a fee for withdrawal?
    questionId: Is_There_A_Fee_For_Withdrawal
  - answer: The amount you can claim may differ from your initial request due to a
      slashing occurrence and penalties. For these reasons, the total claimable
      reward amount could be reduced.
    questionId: Why_Is_The_Claimable_Amount_May_Differ_From_My_Requested_Amount
    question: Why is the claimable amount may differ from my requested amount?
  - answer: Turbo mode is a default mode used unless an emergency event affects the
      Ethereum network. In Turbo Mode, withdrawal requests are fulfilled
      quickly, using all available ETH from user deposits and rewards.
    questionId: What_Is_Turbo_Mode
    question: What is Turbo mode?
  - answer: >-
      Bunker mode is an emergency mode that activates under three worst-case
      conditions (when penalties are large enough to significantly impact the
      protocol’s rewards).


      Importantly, Bunker mode allows for orderly withdrawals to be still processed, albeit more slowly, during chaotic tail-risk scenarios (e.g. mass slashings or a significant portion of validators going offline).
    question: What is Bunker mode?
    questionId: What_Is_Bunker_Mode
  - answer: >-
      Bunker mode is triggered under three conditions when the penalties might
      be big enough to have a significant impact on the protocol’s rewards:


      1. Mass slashing.

      2. Penalties exceeding rewards in the current period between two Oracle reports.

      3. Lower than expected Lido validators' performance in the current period between two Oracle reports and penalties exceeding rewards at the end of it.
    question: What scenarios can cause Bunker mode?
    questionId: What_Scenarios_Can_Cause_Bunker_Mode
  - answer: >-
      Slashing is a penalty that affects validators for intentional or
      accidental misbehavior.


      Mass slashing event is when slashing penalties are big enough to have the impact on Protocol's rewards in the current frame or in the future, esp. midterm penalties.


      Slashing penalties are spread across stakers and may lower your total reward amount. For more information, check out [What Are Staking/Validator Penalties](https://help.lido.fi/en/articles/5232780-what-are-staking-validator-penalties).
    question: What is slashing?
    questionId: What_Is_Slashing
  - answer: Most often, the stETH/wstETH withdrawal period will be from 1-5 days.
      However, if any scenarios cause Bunker mode to happen, this could be
      extended.
    question: If Bunker mode happens when I’ve already submitted a withdrawal
      request, do I need to wait longer?
    questionId: If_Bunker_Mode_Happens_When_I_Have_Already_Submitted_A_Withdrawal_Request_Do_I_Need_To_Wait_Longer
  - answer: >-
      Request size should be at least 100 wei (in stETH), and at
      most 1,000 stETH.


      If you want to withdraw more than 1,000 stETH, your withdrawal request will be split into several requests, but you will still only pay one transaction fee.
    question: Is there any minimum or maximum amount of stETH/wstETH I can withdraw?
    questionId: Is_There_Any_Minimum_Or_Maximum_Amount_Of_stETH_wstETH_I_Can_Withdraw
  - answer: "Each withdrawal request is represented by an NFT: the NFT is
      automatically minted for you when you send a request. You will need to add
      it to your wallet to be able to monitor the request status. When the
      request is ready for the claim, the NFT will change it's appearance."
    question: What is Lido NFT?
    questionId: What_Is_Lido_NFT
  - answer: >-
      Different wallets have specific functionality for adding and working with
      NFT. Most often, you need to find the specific NFT Address and Token ID.
      These parameters you can find on Etherscan. Visit Etherscan, add your
      wallet, and locate the NFT transaction. Once located, open the NFT
      transaction, and you will see the Address and Token ID.


      If you are a MetaMask user, use [this guide](https://help.lido.fi/en/articles/7858367-how-do-i-add-the-lido-nft-to-metamask).
    questionId: How_Do_I_Add_The_Lido_NFT_To_My_Wallet
    question: How do I add the Lido NFT to my wallet?
  - answer: Maybe your wallet doesn’t support the automatic changing of the NFT
      view. To renew the NFT, you can import the Address and Token ID of your
      NFT, and it could change it's appearance to a new “Ready to claim” one.
    question: What could be the reason why my NFT's view did not update even though
      my request was ready to be claimed?
    questionId: What_Could_Be_The_Reason_Why_My_NFTs_View_Did_Not_Update_Even_Though_My_Request_Was_Ready_To_Be_Claimed
---
