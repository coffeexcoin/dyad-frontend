interface Deployment {
  dnft: string;
  vaultManagerSLL: string;
  vaultSLL: string;
  dyad: string;
  vaultManager: string;
  staking: string;
  vault: string;
  weth: string;
  payments: string;
}

export const deployments: { [id: string]: Deployment } = {
  "1": {
    dnft: "0xDc400bBe0B8B79C07A962EA99a642F5819e3b712",
    vaultManagerSLL: "0x0686d75307040EE0C86790D0a62b6c95e3E857C9",
    vaultSLL: "0x25B716D9dCc09842413161abF0F3ff336d165a87",
    dyad: "0x305B58c5F6B5b6606fb13edD11FbDD5e532d5A26",
    vaultManager: "0xfaa785c041181a54c700fD993CDdC61dbBfb420f",
    staking: "0x9D5Fd41ee4A4A09c3135936C7B1595D6b3A779d3",
    vault: "0xcF97cEc1907CcF9d4A0DC4F492A3448eFc744F6c",
    weth: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    payments: "0xcDC13a7fcF393f1b404D9102c5Ab46D5b0A6c721",
  },
  "5": {
    dnft: "0x952E31dFeEB29F5398a36602E0E276F2b09B6651",
    vaultManagerSLL: "0x0686d75307040EE0C86790D0a62b6c95e3E857C9",
    vaultSLL: "0x25B716D9dCc09842413161abF0F3ff336d165a87",
    dyad: "0xD5e05f6b259890F4Cfe6ceF52Fb8A23BcEB2C1C5",
    vaultManager: "0xCF140D12312545FeCD1fE3c8Ac5b28223e90fA4E",
    staking: "0x9D5Fd41ee4A4A09c3135936C7B1595D6b3A779d3",
    vault: "0x00323e31ce9cd10224559b9536b424194C8aDB68",
    weth: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    payments: "0x4407dBe31C847641810A6dFC4C51FE330CBC170D",
  },
};

export const MAX_UINT256 =
  "115792089237316195423570985008687907853269984665640564039457584007913129639935";
