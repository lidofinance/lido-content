---
categories:
  - name: CSM FAQ
    q&a:
      - question: How does Ethereum staking work?
        answer: >-
          The Ethereum network is secured through the Proof-of-Stake based consensus mechanism. It involves locking a minimum of 32 ETH per validator in the deposit contract to enable validator participation in the Ethereum consensus. Validators attest to and propose blocks, and as a consequence, they may receive rewards from consensus incentives and Execution Layer priority fees/MEV. Downtime can incur penalties, and serious faults or malicious behavior can result in slashing - the forced exit of a validator and a corresponding loss of staked ETH.
      - question: How do I stake Ethereum?
        answer: |-
          You can solo stake, use staking-as-a-service, or choose bonded, pooled, or liquid staking to participate with less than 32 ETH. Solutions (e.g. Lido's Community Staking Module) let capable operators run validators with reduced upfront ETH (i.e. 2.4 ETH) while maintaining control over validator operations.

          All staking options carry different risks, responsibilities, and technical requirements. This information does not constitute advice, and users should conduct their own research before participating.

          * **Solo staking:** Run validator software yourself with at least 32 ETH, retaining complete control of your validator keys and setup.
          * **Bonded staking:** Supply a fraction of Ethereum-defined minimum validator stake as collateral, and a third party (e.g., the Lido protocol) allocates the remaining ETH required to activate the validator. You control validator keys and setup, and the bonded collateral covers potential losses arising from operator misbehavior or poor performance.
          * **Staking as a service:** You supply 32 ETH; a provider handles hardware and operations while you retain withdrawal credentials and the ability to initiate validator withdrawal according to Ethereum protocol rules.
          * **Pooled staking:** Stake any amount into a staking pool that runs validators on your behalf.
          * **Liquid staking:** A pooled option allows you to mint a transferable utility token (e.g. Lido stETH) that can be used in on-chain activities (DeFi) while your stake is locked and you continue getting staking rewards without maintaining any staking infrastructure.
      - question: What should I consider before staking ETH?
        answer: >-
          Staking ETH puts your ETH to work securing the network and, as a consequence, you may receive variable rewards. Whether it's right for you depends on your goals and risk tolerance. There are trade-offs to consider, like reward fluctuations, exit/lockup times, and different operational or protocol risks depending on the method.
      - question: Can I lose my ETH if I stake it?
        answer: >-
          Yes, staking comes with risks. Validators can be penalized or slashed for poor performance or malicious behavior, which may result in the loss of some ETH. With pooled or liquid staking, you usually face fewer hardware and operational risks yourself, but you take on other risks such as provider reliability and smart-contract vulnerabilities.
      - question: What is Ethereum solo staking?
        answer: >-
          Solo staking entails running validators entirely on your own, and retaining full control over infrastructure, validator client software selection, and ongoing maintenance, with no third-party access to your keys or ETH.
      - question: Is solo staking ETH worth it?
        answer: >-
          Solo staking can be appealing for people who want to manage their validators on their own, provided they can maintain reliable uptime and handle basic hardware and software. Solo staking offers full participation rewards and eliminates reliance on third parties. Some solutions such as Lido CSM enable operators to run additional validators on the same hardware with reduced upfront ETH, which can improve capital efficiency, though these come with their own requirements and risks.
      - question: What is the Community Staking Module (CSM)?
        answer: >-
          The Community Staking Module (CSM) is a Lido staking module with permissionless entry that aims to broaden participation from home stakers and increase the diversity of the Lido Node Operator set. It lowers barriers to contributing directly to Ethereum's security by allowing operators to run validators via the Lido protocol with a small [bond]({{operatorportal_url}}/modules/community-staking-module#block-e4a6daadca12480d955524247f03f380) (1.3 - 2.4 ETH per validator) and improved capital efficiency compared to solo staking, while still carrying its own responsibilities and risks.
      - question: What do Node Operators receive in CSM?
        answer: |-
          Node Operators may receive the following, depending on protocol conditions and validator performance:

          * **Bond rebase:** The stETH used as a [bond]({{operatorportal_url}}/modules/community-staking-module#block-e4a6daadca12480d955524247f03f380) may grow or shrink with stETH's rebase, including before validator activation, subject to protocol mechanics.
          * **Socialized Node Operator rewards:** A portion of Consensus Layer and Execution Layer rewards collected by the Lido protocol is pooled, smoothed, and socialized across the entire Lido validator set, helping reduce volatility for independent operators with few validators. Even during minor outages or disruptions, CSM operators may still receive rewards. However, rewards remain dependent on both overall and individual validator performance and protocol outcomes, and penalties can still occur.
      - question: Ethereum solo staking vs. Community Staking Module (CSM)
        answer: |-
          Solo staking involves depositing at least 32 ETH per validator and managing all software, hardware and operations yourself - you have full control and are directly exposed to both the rewards and risks tied to your performance.

          The CSM allows operators to run validators with a small [bond]({{operatorportal_url}}/modules/community-staking-module#block-e4a6daadca12480d955524247f03f380) (1.3 - 2.4 ETH per validator) and receive delegated stake through the Lido protocol. Operators manage their operations independently, participate in rewards distribution generated across the Lido validator set, and operate under smart-contract and governance rules. The operator bond may accrue staking rewards generated by the Lido protocol.

          Running CSM validators may potentially result in higher rewards than solo staking, depending on performance, protocol mechanics, and market conditions. Operators can also run both solo and CSM validators on the same hardware if capacity allows.
      - question: What are the main risks of using the Community Staking Module?
        answer: |-
          CSM Node Operators face several risks.

          * **Operational Risks:** CSM Operators can incur penalties for long-term validator underperformance, theft of block-proposal (Execution Layer) rewards, or validator slashing. Learn more about penalties [here]({{operatorportal_url}}/modules/community-staking-module#block-3951aa72ba1e471bafe95b40fef65d2b). Operational risks may also involve ecosystem risks, derived from reliance on third-parties or the broader Ethereum ecosystem, such as issues surrounding tooling (e.g. clients, MEV supply chain, etc.).
          * **Code Risks:** The CSM code could contain smart contract or off-chain software vulnerabilities or bugs. To help minimize these risks, the [code](https://github.com/lidofinance/community-staking-module) is open-sourced, covered by multiple third-party [audits](https://github.com/lidofinance/audits), and supported by a robust [Immunefi](https://immunefi.com/bug-bounty/lido/information/) bug-bounty program. In addition, upgrades occur via on-chain governance.
          * **Network Risks:** Validators are part of a decentralized network, and the security and stability of the Ethereum network as a whole can affect individual validators. Events such as network attacks or protocol upgrades may impact validator operations, leading to potential disruptions or losses.
          * **Governance Risks:** The CSM is governed by decisions made through the Lido DAO. Future governance votes may change parameters, incentives, or operational rules of the module. These changes may affect how the CSM functions over time.
          * **Regulatory Risks:** Laws and regulations relating to staking, node operation, or digital assets may evolve. New rules or interpretations could influence how the CSM operates or how participants interact with it. Some impacts may be difficult to anticipate in advance.
          * **Liquidity / Market Risks:** The value of ETH, stETH, and rewards can fluctuate based on broader market conditions and protocol performance. Network-level factors such as reward rates, activation/exit queues, and gas costs can also impact results. Furthermore, if the Lido protocol would face tail-risk conditions (e.g. mass slashing), the stETH used as a bond could also decrease in amount. These elements are outside the control of CSM operators.
          * **Unknown / Emerging Risks:** As with any decentralized protocol, new risks may arise from unforeseen technical, economic, or network developments. Novel attack vectors, changes elsewhere in the Ethereum ecosystem, or unexpected interactions between components may create conditions not currently known. These emerging risks may affect CSM behavior or outcomes in ways that are not predictable today.
---
