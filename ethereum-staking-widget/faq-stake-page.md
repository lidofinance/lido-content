---
pageIdentification: Stake_Page
faq:
  - question: What is Lido?
    questionId: What_Is_Lido
    answer: Lido is the name of a family of open-source peer-to-system software
      tools deployed and functioning on the Ethereum, Solana, and Polygon
      blockchain networks. The software enables users to mint transferable
      utility tokens, which receive rewards linked to the related validation
      activities of writing data to the blockchain, while the tokens can be used
      in other on-chain activities.
  - question: How does Lido work?
    questionId: How_Does_Lido_Work
    answer: While each network works differently, generally, the Lido protocols
      batch user tokens to stake with validators and route the staking packages
      to network staking contracts. Users mint amounts of stTokens which
      correspond to the amount of tokens sent as stake and they receive staking
      rewards. When they unstake, they burn the stToken to initiate the
      network-specific withdrawal process to withdraw the balance of stake and
      rewards.
  - question: Is it safe to work with Lido?
    questionId: Is_It_Safe_To_Work_With_Lido
    answer: >-
      In order to work safe, Lido fits the next points:


      * Open-sourcing & continuous review of all code.

      * Committee of elected, best-in-class validators to minimise staking risk.

      * Use of non-custodial staking service to eliminate counterparty risk.

      * Use of DAO for governance decisions & to manage risk factors.

      * Lido has been audited by Certora, StateMind, Hexens, ChainSecurity, Oxorio, MixBytes, SigmaPrime, Quantstamp. Lido audits can be found in more detail [here](https://github.com/lidofinance/audits).


      Usually when staking ETH you choose only one validator. In the case of Lido you stake across many validators, minimising your staking risk.
  - question: What are the risks of staking with Lido?
    questionId: What_Are_The_Risks_Of_Staking_With_Lido
    answer: >-
      There exist a number of potential risks when staking using liquid staking
      protocols.


      * Smart contract security

        There is an inherent risk that Lido could contain a smart contract vulnerability or bug. The Lido code is open-sourced, audited and covered by an extensive bug bounty program to minimise this risk. To mitigate smart contract risks, all of the core Lido contracts are audited. Audit reports can be found [here](https://github.com/lidofinance/audits#lido-protocol-audits). Besides, Lido is covered with a massive [Immunefi bug bounty program](https://immunefi.com/bounty/lido/).
      * Slashing risk

        Validators risk staking penalties, with up to 100% of staked funds at risk if validators fail. To minimise this risk, Lido stakes across multiple professional and reputable node operators with heterogeneous setups, with additional mitigation in the form of self-coverage.
      * stToken price risk

        Users risk an exchange price of stTokens which is lower than inherent value due to withdrawal restrictions on Lido, making arbitrage and risk-free market-making impossible. The Lido DAO is driven to mitigate the above risks and eliminate them entirely to the extent possible. Despite this, they may still exist and, as such, it is our duty to communicate them.

      The Lido DAO is driven to mitigate the above risks and eliminate them entirely to the extent possible. Despite this, they may still exist.
  - question: What is Lido staking APR for Ethereum?
    questionId: What_Is_Lido_Staking_APR_For_Ethereum
    answer: >-
      Lido staking APR for Ethereum = Protocol APR * (1 - Protocol fee)


      Protocol APR — the overall Consensus Layer (CL) and Execution Layer (EL) rewards received by Lido validators to total pooled ETH estimated as the moving average of the last seven days.


      Protocol fee — Lido applies a 10% fee on staking rewards that are split between node operators and the DAO Treasury.


      More about Lido staking APR for Ethereum you could find on the [Ethereum landing page](https://lido.fi/ethereum) and in our [Docs](https://docs.lido.fi/#liquid-staking).
  - question: What fee is applied by Lido? What is this used for?
    questionId: What_Fee_Is_Applied_By_Lido_What_Is_This_Used_For
    answer: The protocol applies a 10% fee on staking rewards. This fee is split
      between node operators and the Lido DAO. That means the users receive 90%
      of the staking rewards returned by the networks.
  - question: What is stETH?
    answer: >-
      \

      stETH is a transferable rebasing utility token representing a share of the total ETH staked through the protocol, which consists of user deposits and staking rewards. Because stETH rebases daily, it communicates the position of the share daily.
    questionId: What_Is_stETH
  - question: How can I get stETH?
    questionId: How_Can_I_Get_stETH
    answer: You can get stETH many ways, including interacting with the smart
      contract directly.Yet, it is much easier to use a [Lido Ethereum staking
      widget](https://stake.lido.fi/) and in other [DEX Lido
      integrations](https://lido.fi/lido-ecosystem?tokens=stETH&categories=Get).
  - answer: You can use your stETH as collateral, for lending,
      and [more](https://lido.fi/lido-ecosystem).
    question: How can I use stETH?
    questionId: How_Can_I_Use_stETH
  - question: Where can I cover my stETH?
    questionId: Where_Can_I_Cover_My_stETH
    answer: >-
      There are multiple coverage and insurer providers with different products
      for stETH:


      * [Idle Finance](https://idle.finance/)

      * [Nexus Mutual](https://nexusmutual.io/)

      * [Ribbon Finance](https://app.ribbon.finance/)

      * [Chainproof](https://www.chainproof.co/)


      Check with providers for coverage and insurer conditions.
  - question: How can I unstake stETH?
    questionId: How_Can_I_Unstake_stETH
    answer: You can use our [Withdrawals Request and Claim
      tabs](https://stake.lido.fi/withdrawals/claim) to unstake stETH and
      receive ETH at a 1:1 ratio. Under normal circumstances, withdrawal period
      can take anywhere between 1-5 days. After that, you can claim your ETH
      using the Claim tab. Also, you can exchange stETH on [DEX Lido
      integrations](https://lido.fi/lido-ecosystem?tokens=stETH&categories=Get).
---
