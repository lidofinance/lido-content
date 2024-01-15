---
pageIdentification: Withdrawals_Page_Claim_Tab
faq:
  - question: What are withdrawals?
    questionId: What_Are_Withdrawals
    answer: Users can unstake their stETH or wstETH through withdrawals. Upon
      unstaking stETH, they will receive ETH at a 1:1 ratio. When unstaking
      wstETH, the unwrapping process will take place seamlessly in the
      background.
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
  - question: When I try to withdraw wstETH, why do I see the stETH amount in my request?
    questionId: When_I_Try_To_Withdraw_wstETH_Why_Do_I_See_The_stETH_Amount_In_My_Request
    answer: When you request to withdraw wstETH, it is automatically unwrapped into
      stETH, which then gets transformed into ETH. The main withdrawal period is
      when stETH is transformed into ETH. That's why you see the amount pending
      denominated in stETH.
  - question: If I have several requests, can I claim them separately?
    questionId: If_I_Have_Several_Requests,_Can_I_Claim_Them_Separately
    answer: Yes. You can choose the requests you want to claim in the ‘Request List’
      on the [Claim tab](https://stake.lido.fi/withdrawals/claim/).
  - answer: The amount you can claim may differ from your initial request due to a
      slashing occurrence and penalties. For these reasons, the total claimable
      reward amount could be reduced.
    question: Why is the claimable amount different from my requested amount?
    questionId: Why_Is_The_Claimable_Amount_Different_From_My_Requested_Amount
  - answer: >-
      Slashing is a penalty that affects validators for intentional or
      accidental misbehavior.


      Mass slashing event is when slashing penalties are big enough to have the impact on Protocol's rewards in the current frame or in the future, esp. midterm penalties.


      Slashing penalties are spread across stakers and may lower your total reward amount. For more information, check out [What Are Staking/Validator Penalties](https://help.lido.fi/en/articles/5232780-what-are-staking-validator-penalties).
    question: What is slashing?
    questionId: What_Is_Slashing
  - answer: "Each withdrawal request is represented by an NFT: the NFT is
      automatically minted for you when you send a request. You will need to add
      it to your wallet to be able to monitor the request status. When the
      request is ready for the claim, the NFT will change it's appearance."
    questionId: What_Is_Lido_NFT
    question: What is Lido NFT?
  - answer: >-
      Different wallets have specific functionality for adding and working with
      NFT. Most often, you need to find the specific NFT Address and Token ID.
      These parameters you can find on Etherscan. Visit Etherscan, add your
      wallet, and locate the NFT transaction. Once located, open the NFT
      transaction, and you will see the Address and Token ID.


      If you are a MetaMask user, use [this guide](https://help.lido.fi/en/articles/7858367-how-do-i-add-the-lido-nft-to-metamask).
    question: How do I add the Lido NFT to my wallet?
    questionId: How_Do_I_Add_The_Lido_NFT_To_My_Wallet
  - answer: Maybe your wallet doesn’t support the automatic changing of the NFT
      view. To renew the NFT, you can import the Address and Token ID of your
      NFT, and it could change it's appearance to a new “Ready to claim” one.
    question: What could be the reason why my NFT's view did not update even though
      my request was ready to be claimed?
    questionId: What_Could_Be_The_Reason_Why_My_NFTs_View_did_Not_Update_Even_Though_My_Request_Was_Ready_To_Be_Claimed
---
