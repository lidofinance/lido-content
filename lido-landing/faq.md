---
categories:
  - name: Introduction
    q&a:
      - question: What is Lido?
        answer: Lido is the name of a family of open-source peer-to-system software
          tools deployed and functioning on the Ethereum and Polygon blockchain
          networks. The software enables users to mint transferable utility
          tokens, which receive rewards linked to the related validation
          activities of writing data to the blockchain, while the tokens can be
          used in other on-chain activities.
      - answer: While each network works differently, generally, the Lido protocols
          batch user tokens to stake with validators and route the staking
          packages to network staking contracts. Users mint amounts of stTokens
          which correspond to the amount of tokens sent as stake and they
          receive staking rewards. When they unstake, they burn the stToken to
          initiate the network-specific withdrawal process to withdraw the
          balance of stake and rewards.
        question: How does Lido work?
      - question: Why Lido?
        answer: >-
          * Lido protocols give the user liquidity - the stTokens are on the
          execution layer, so they can be transferred. Users receive staking
          rewards from validation activities but can sell stTokens anytime they
          want to exit their staking position.

          * Participate in DeFi - users can use stTokens as building blocks in DeFi protocols at the same time as getting staking rewards from validating activities.

          * Lido protocols are governed by the Lido DAO - this means there is no central point for making decisions, and there is no one person who has access, control, or decision power to define what to do with users’ tokens. All decisions with respect to the protocol are voted up by the DAO, and all LDO holders may vote.

          * Uses time-proven node operators. Lido DAO works with experienced node operators, which decreases the likelihood of technical mistakes that could lead to slashing or penalties. Users supply the stake, and the node operators supply the know-how.
  - name: Staking
    q&a:
      - question: What is liquid staking?
        answer: Liquid staking protocols allow users to mint a transferable utility
          token that can be used in on-chain activities while their stake is
          locked-up while they continue to get staking rewards without
          maintaining any staking infrastructure. Thus it is said to be
          “liquid”.
      - question: What fee is applied by the protocol? What is it used for?
        answer: The protocol applies a 10% fee on staking rewards. This fee is split
          between node operators and the Lido DAO. That means the users receive
          90% of the staking rewards returned by the networks.
      - question: How can I get stTokens?
        answer: Lido protocols let users stake native tokens (ETH, MATIC) from Ethereum
          and Polygon networks in a fully permissionless way. The protocols are
          deployed on public blockchains, so users do not need the website to
          access the smart contracts. However, for convenience, users can get
          started with information on [the main
          page](https://lido.fi/#networks).
      - question: Where can I use stTokens?
        answer: stTokens can be used across a growing Ecosystem. [Explore apps and
          services](https://lido.fi/lido-ecosystem) integrated with stTokens.
  - name: Ethereum
    q&a:
      - question: What is Lido on Ethereum?
        answer: "The Lido on Ethereum protocol is a liquid-staking protocol for ETH. The
          protocol overcomes problems associated with native ETH staking namely:
          illiquidity, accessibility, and dealing with hardware. This is
          achieved by tokenizing stake, removing the entry barrier of 32 ETH,
          and routing user stake with validator keys supplied by operators while
          enhancing Ethereum decentralization."
      - question: What is stETH?
        answer: stETH is a transferable rebasing utility token representing a share of
          the total ETH staked through the protocol, which consists of user
          deposits and staking rewards. Because stETH rebases daily, it
          communicates the position of the share daily.
      - question: How can I get stETH?
        answer: You can get stETH many ways, including interacting with the smart
          contract directly. Yet, it is much easier to use a [Lido Ethereum
          staking widget](https://stake.lido.fi/) or in other [DEX Lido
          integrations](https://lido.fi/lido-ecosystem?tokens=stETH&categories=Get).
      - question: How can I use stETH?
        answer: You can use your stETH as collateral, for lending,
          and [more](https://lido.fi/lido-ecosystem?tokens=stETH&categories=Earn).
      - question: How can I unstake stETH?
        answer: You can use our [Withdrawals Request and Claim
          tabs](https://stake.lido.fi/withdrawals) to unstake stETH and receive
          ETH at a 1:1 ratio. Also, you can exchange stETH on [DEX Lido
          integrations](https://lido.fi/lido-ecosystem?tokens=stETH&categories=Get).
      - question: What is wstETH?
        answer: wstETH (wrapped stETH) is a non-rebasing version of stETH, wstETH's
          price denominated in stETH changes instead. The wstETH balance can
          only be changed upon transfers, minting, and burning. At any given
          time, anyone holding wstETH can convert any amount of it to stETH at a
          fixed rate, and vice versa. Normally, the rate gets updated once a
          day, when stETH undergoes a rebase.
      - question: How can I get wstETH?
        answer: You can wrap your stETH or ETH tokens using [Wrap & Unwrap staking
          widget](https://stake.lido.fi/wrap) or [DEX Lido
          integrations](https://lido.fi/lido-ecosystem?tokens=wstETH&categories=Get).
      - question: How can I use wstETH?
        answer: wstETH is useful
          across [L2](https://lido.fi/lido-ecosystem?networks=arbitrum%2Coptimism) and
          other [DeFi
          protocols](https://lido.fi/lido-ecosystem?tokens=wstETH&categories=Earn),
          which are based on constant balance tokens.
      - question: Do I get my staking rewards if I wrap stETH to wstETH?
        answer: Yes, wrapped stETH gets staking rewards at the same rate as regular
          stETH. When you keep your stETH in a wrapper, you cannot see your
          daily staking rewards. However, when you unwrap your wstETH your new
          stETH balance will have increased relative to the pre-wrapped amount
          to reflect your received rewards.
      - question: Do I need to claim my staking rewards if I wrap stETH to wstETH?
        answer: No, staking rewards accrue to wstETH automatically.
      - question: How can I unwrap wstETH?
        answer: You can unwrap your wstETH tokens using [Wrap & Unwrap staking
          widget](https://stake.lido.fi/wrap?mode=unwrap).
      - question: Do I need to unwrap my wstETH before requesting withdrawals?
        answer: No, you can transform your wstETH to ETH using the [Withdrawals Request
          and Claim tabs](https://stake.lido.fi/withdrawals). Note that, under
          the hood, wstETH will unwrap to stETH first, so your request will be
          denominated in stETH.
      - question: What is the difference between ETH, stETH, and wstETH?
        answer: >-
          ETH is Ethereum's native cryptocurrency.


          stETH is a transferable rebasing utility token representing a share of the total ETH staked through the protocol, which consists of user deposits and staking rewards.


          wstETH (wrapped stETH) is a non-rebasing version of stETH. wstETH for use with specific DeFi applications.
      - question: What is Lido staking APR for Ethereum?
        answer: >-
          Lido staking APR for Ethereum = Protocol APR * (1 - Protocol fee)


          Protocol APR — the overall Consensus Layer (CL) and Execution Layer (EL) rewards received by validators using Lido to total pooled ETH estimated as the moving average of the last seven frames (approximately 7 days) after protocol fee.


          Protocol fee — a 10% fee on staking rewards that is split between node operators and the DAO Treasury.


          More about Lido Lido staking APR for Ethereum you could find on the [Ethereum landing page](https://lido.fi/ethereum) and in our [Docs](https://docs.lido.fi/).
      - question: What is Lido on L2?
        answer: With Lido protocol, users could bridge wstETH to L2’s like Arbitrum and
          Optimism to benefit from lower gas fees and other [DeFi
          opportunities](https://help.lido.fi/en/articles/6655781-lido-on-l2-an-overview).
      - question: What is the Insurance fund used for?
        answer: The [Insurance
          fund](https://etherscan.io/address/0x8B3f33234ABD88493c0Cd28De33D583B70beDe35) is
          not insurance but is the name of the smart contract where stETH tokens
          are set aside, which could cover some of the estimated slashing risks.
          Read more about risk
          scenarios [here](https://research.lido.fi/t/redirecting-incoming-revenue-stream-from-insurance-fund-to-dao-treasury/2528/20?u=kadmil).
          In case of a widespread slashing incident, the decision to recover
          losses from this fund is decided based on the vote of the Lido DAO.
      - question: Where can I cover my stETH?
        answer: >-
          There are multiple coverage and insurer providers with different
          products for stETH:


          * [Idle Finance](https://idle.finance/)

          * [Nexus Mutual](https://nexusmutual.io/)

          * [Ribbon Finance](https://app.ribbon.finance/)

          * [Chainproof](https://www.chainproof.co/)


          Check with providers for coverage and insurer conditions.
  - name: Polygon
    q&a:
      - question: What is Lido on Polygon?
        answer: Lido on Polygon is a liquid staking protocol for MATIC. The protocol
          lets users get MATIC staking rewards without needing to maintain
          infrastructure and enables them to participate in on-chain activities
          and DeFI with their staked tokens.
      - question: What is stMatic?
        answer: stMATIC is the utility token representing a share of the total MATIC
          staked through the protocol. It is a non-rebasing token, similar to
          wstETH, meaning that the amount of stMATIC in the user’s wallet
          address will not change while the MATIC balance updates inside the
          wrapper daily.
      - question: How to bridge stMATIC from Ethereum to Polygon?
        answer: Staking through Lido protocol users get stMATIC on the Ethereum network.
          However, users can also bridge stMATIC to the Polygon network via
          Polygon [PoS bridge](https://wallet.polygon.technology/bridge).
      - question: How can I get stMatic?
        answer: stMATIC is available in many ways, including directly staking MATIC
          ERC20 through the [Lido Polygon stake
          widget](https://polygon.lido.fi/) or through other [DEX Lido
          integrations](https://lido.fi/lido-ecosystem?categories=Get&tokens=stMATIC).
      - question: How can I use stMATIC?
        answer: With stMATIC users can grow MATIC, get instant liquidity, or participate
          in DeFi across the Ethereum and Polygon networks. Some integrations
          can be
          found [here](https://lido.fi/lido-ecosystem?tokens=stMATIC&categories=Earn).
      - question: How can I unstake stMATIC?
        answer: stMATIC can be unstaked in several ways, including through [the Lido on
          Polygon unstake widget](https://polygon.lido.fi/). The default stMATIC
          unstaking period takes around 3-4 days to process. After that, users
          can claim rewards in the [Claim tab](https://polygon.lido.fi/).
          Immediate withdrawal options are available through liquidity pools on
          AMM protocols and other DEXs where stMATIC can be exchanged for MATIC
          to exit staking. You could explore opportunities for
          exchanges [here](https://lido.fi/lido-ecosystem?tokens=stMATIC&categories=Get).
      - question: What is the difference between MATIC and stMATIC?
        answer: >-
          MATIC - is an Ethereum token that powers the Polygon Network. It is
          used to secure the network using the PoS consensus algorithm and to
          pay for transactions on Polygon.


          stMATIC - is an ERC20 token representing the share of the total MATIC tokens staked through the protocol.
      - question: What is Lido staking APR for Polygon?
        answer: Lido staking APR for Polygon is calculated by deducting the 10% fee that
          Lido on Polygon protocol takes from the native Polygon staking APR,
          which can be
          seen [here](https://staking.polygon.technology/rewards-calculator).
  - name: Lido on L2
    q&a:
      - question: What is Lido on L2?
        answer: "[Lido on Layer 2 (L2)](https://lido.fi/lido-on-l2) extends the use of
          your stTokens within L2 networks. By utilizing Lido tokens, users can
          benefit from reduced gas fees across various DeFi integrations within
          the Layer 2 ecosystem."
      - question: What are the advantages of using Layer 2 over Layer 1?
        answer: The main aim of [L2’s](https://ethereum.org/layer-2) is to expand
          Ethereum’s scalability and offer users lower gas fees. With higher
          transactions per second, lower fees, and new technology, users expand
          into new applications with improved user experience.
      - question: Which L2 solutions are supported within Lido on L2?
        answer: Currently, only wstETH can be used within Arbitrum, Optimism, Base,
          zkSync Era, Polygon PoS, Mantle, and Linea.
      - question: What tokens are supported on Lido on L2?
        answer: For now, only
          [wstETH](https://help.lido.fi/en/articles/5231836-what-is-lido-s-wsteth)
          is supported on Lido on L2. [Get wstETH](https://stake.lido.fi/wrap).
      - question: Is stETH available on L2?
        answer: No, currently, only wstETH is available on L2 solutions.
      - question: What is the difference between stETH and wstETH?
        answer: wstETH is a wrapped version of stETH. Due to the dynamic nature of stETH
          balances within Lido, which change daily due to staking rewards,
          wstETH maintains a fixed balance and employs an underlying share
          system to reflect staking rewards.
      - question: Do I still have rewards on my tokens on L2?
        answer: You get staking rewards by holding the token. Rewards are realized when
          you unwrap or swap wstETH back to stETH or ETH.
      - question: Can I stake directly on L2?
        answer: Direct staking on L2 is not possible yet, but you can get wstETH from
          [DEXes on Layer
          2](https://lido.fi/lido-ecosystem?tokens=wsteth&criteria=and&categories=get).
      - question: How can I bridge wstETH between Layer 1 and Layer 2?
        answer: You can’t bridge wstETH between Layer 1 and Layer 2 using Lido UI, but
          you can utilize direct L2 bridges using [bridging
          guides](https://help.lido.fi/en/collections/3641672-lido-on-layer-2-l2)
          and [swap
          options](https://lido.fi/lido-ecosystem?tokens=wsteth&criteria=and&categories=get).
      - question: How can I bridge wstETH on L2 chains?
        answer: Lido users can bridge wstETH to various L2s using the provided [bridging
          guides](https://help.lido.fi/en/collections/3641672-lido-on-layer-2-l2).
          Also, there are [options for swapping and
          exchanging](https://lido.fi/lido-ecosystem?tokens=wsteth&criteria=and&categories=get)
          tokens on L2, including wstETH.
      - question: What is the optimal scenario for getting wstETH on L2 if I have L1 ETH
          in my wallet?
        answer: "[Wrap](https://stake.lido.fi/wrap) your ETH directly to wstETH and then
          bridge your wstETH on a preferable L2 network with [bridging
          guides](https://help.lido.fi/en/collections/3641672-lido-on-layer-2-l\
          2)."
      - question: What DeFi apps support wstETH on L2?
        answer: Various DeFi apps that support wstETH can be found on the [Lido
          Ecosystem
          page](https://lido.fi/lido-ecosystem?tokens=wsteth&criteria=or&networks=optimism%2Cbase%2Cmantle%2Czksync+era%2Clinea%2Carbitrum).
      - question: Can I bridge wstETH from L2 to Ethereum (L1)?
        answer: Yes, by using canonical bridges with or by swap options.
      - question: Can I bridge wstETH from L2 to L2?
        answer: You can bridge wstETH from L2 to L2 via canonical bridges through the
          interim L1 hop or can use 3rd-party cross-chain transfers like
          [portalbridge.com](http://portalbridge.com).
      - question: Are there any risks associated with using Lido stTokens on Layer 2?
        answer: While interacting with bridges, you bear additional risks of the
          particular rollup and its canonical bridges.
      - question: How can I verify the correctness of the bridged token address?
        answer: You can check the address with [Deployed contracts Lido on
          L2](https://docs.lido.fi/deployed-contracts/?pk_vid=d574ab4ffd7a04221706101159885f52#lido-on-l2).
      - question: Where can I find support or get assistance with Lido on L2?
        answer: You could refer your questions to [Lido
          Discord](https://discord.com/invite/lido) or [Telegram
          chat](https://t.me/lidofinance).
  - name: Lido DAO
    q&a:
      - question: What is DAO?
        answer: DAO is a decentralized autonomous organization, a bottom-up entity
          structure without a central authority. Members of a DAO own governance
          tokens of the DAO, and members have the ability to vote on initiatives
          and decisions of the entity with the token.
      - question: Why are Lido protocols governed by a DAO?
        answer: >-
          * The DAO organization enables a focus on community and might offer a
          more socially-conscious structure and consequent decision-making than
          conventional arrangements.

          * The DAO organization will be able to cover the costs of proper maintenance and upgrading of the protocols from the DAO token treasury.

          * Liquid staking as a product is especially sensitive to being in tune with the community, and where Lido can't have governance minimized protocol, it is beneficial to have community-aligned governance.
      - question: How does the Lido governance process work?
        answer: >-
          Decisions made by the Lido DAO may have on-chain results: either
          immediate transactions or transactions to be made in the future. To
          make sure that those decisions are well-informed, as well as properly
          communicated with the wider community, the governance process in Lido
          consists of multiple steps.


          [Learn more](https://lido.fi/governance)
      - question: What is LDO?
        answer: LDO is an ERC20 token that gives the ability to participate in the
          governance process of the Lido DAO. The Lido DAO decides on some key
          parameters of the liquid staking protocols through the voting power of
          governance token (LDO). By holding the LDO token, one has the ability
          to vote within the Lido DAO.
  - name: Node operators
    q&a:
      - question: Who are Node Operators used with Lido protocols?
        answer: >-
          The Node Operators (NOs) are a collective of experienced time-proven
          operators elected by the DAO. The better the underlying operator sets
          are, the more robust, resilient, and performing the protocols will be.
          Selecting a good operator set is aimed to increase community
          acceptance and reduce protocol risks.


          [Learn more](https://operatorportal.lido.fi/)
      - question: How to apply to be a Node Operator for Lido?
        answer: You could explore the requirements to be considered and apply to be a
          Node Operator to use Lido protocols on our [Node Operator
          Portal](https://operatorportal.lido.fi/apply-to-be-a-lido-node-operator).
  - name: Security
    q&a:
      - question: Is it safe to work with Lido DAO?
        answer: >-
          In order to work safe, Lido fits the next points:


          * Open-sourcing & continuous review of all code.

          * Committee of elected, best-in-class validators to minimize staking risk.

          * Use of non-custodial staking service to eliminate counter-party risk.

          * Use of DAO for governance decisions & to manage risk factors.

          * Lido has been audited by Certora, StateMind, Hexens, ChainSecurity, Oxorio, MixBytes, SigmaPrime, and Quantstamp. Lido audits can be found in more detail [here](https://github.com/lidofinance/audits).
      - question: What are the risks of staking with Lido?
        answer: >-
          There exist a number of potential risks when staking using liquid
          staking protocols.


          * **Smart contract security**\
            There is an inherent risk that Lido could contain a smart contract vulnerability or bug. The Lido code is open-sourced, audited, and covered by an extensive bug bounty program to minimize this risk. To mitigate smart contract risks, all of the core Lido contracts are audited. Audit reports can be found [here](https://github.com/lidofinance/audits#lido-protocol-audits). Besides, Lido is covered with a massive [Immunefi bug bounty program](https://immunefi.com/bounty/lido/).
          * **Slashing risk**\
            Validators risk staking penalties, with up to 100% of staked funds at risk if validators fail. To minimize this risk, Lido stakes across multiple professional and reputable node operators with heterogeneous setups, with additional mitigation in the form of self-coverage.
          * **stToken price risk**\
            Users risk an exchange price of stTokens which is lower than inherent value due to withdrawal restrictions on Lido, making arbitrage and risk-free market-making impossible. The Lido DAO is driven to mitigate the above risks and eliminate them entirely to the extent possible. Despite this, they may still exist and, as such, it is our duty to communicate them.

          The Lido DAO is driven to mitigate the above risks and eliminate them entirely to the extent possible. Despite this, they may still exist.
      - question: Have the protocols been audited?
        answer: Lido DAO codebase has been audited by industry leaders in blockchain
          security. You can find the list of our
          audits [here](https://github.com/lidofinance/audits) with code review
          reports.
      - question: Does Lido DAO have a Bug Bounty program?
        answer: Lido DAO uses the [Immunefi platform](https://immunefi.com/) — the
          leading bug bounty platform for DeFi with the world's largest
          bounties. All info about Lido Bug Bounty programs
          is [here](https://lido.fi/bug-bounty).
  - name: Additional
    q&a:
      - question: Where can I find more info for developers?
        answer: >-
          * [Lido on
          Ethereum](https://docs.lido.fi/guides/steth-integration-guide)

          * [Lido on Polygon](https://docs.polygon.lido.fi/)
      - question: Where can I get info about Lido integrations?
        answer: All info about Lido integrations you can find in our [Help
          Center](https://help.lido.fi/en/) or on the [Lido Ecosystem
          page](https://lido.fi/lido-ecosystem).
      - question: Where can I go to join Lido DAO’s community?
        answer: >-
          * Follow us on [Twitter](https://twitter.com/lidofinance).

          * Join our [Telegram](https://t.me/lidofinance).

          * Ask questions in [Discord](https://discord.com/invite/lido).

          * Learn about Lido on [Blog](https://blog.lido.fi/).

          * Contribute to the codebase in [GitHub](https://github.com/lidofinance).

          * Stay updated through the [Research forum](https://research.lido.fi/).
      - question: How can I become a partner with Lido DAO?
        answer: Any blockchain developer, crypto enthusiast, or member of the community
          can be a participant in our Lido Ecosystem Grants Organization. If
          you're improving the ecosystem or creating general awareness about
          Ethereum, PoS, and DeFi and have a solid plan on how to meet your
          goals, [here is the info](https://lido.fi/lego) for you.
---
