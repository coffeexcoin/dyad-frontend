import Link from "next/link";

import { cn } from "@/lib/utils";
import useEthPrice from "@/hooks/useEthPrice";
import useKerosenePrice from "@/hooks/useKerosenePrice";
import { useReadKeroseneVaultAssetPrice } from "@/generated";
import { fromBigNumber } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { ethPrice } = useEthPrice();
  const { kerosenePrice } = useKerosenePrice();

  const { data: keroseneVaultAssetPrice } = useReadKeroseneVaultAssetPrice();

  return (
    <nav
      className={cn(
        "flex justify-start items-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-2xl font-bold transition-colors hover:text-primary"
      >
        DYAD
      </Link>
      <div className="flex text-gray-400 text-xs">
        <div>ETH: $</div>
        <div>{ethPrice}</div>
      </div>
      <div className="flex text-gray-400 text-xs">
        <div>KEROSENE: $</div>
        <div>{kerosenePrice.toFixed(4)}</div>
        <div className="pl-2"> / DV: $</div>
        <div>{fromBigNumber(keroseneVaultAssetPrice).toFixed(5)}</div>
      </div>
      <div className="flex text-gray-400 text-xs"></div>
      {/* <Link */}
      {/*   href="/vaults" */}
      {/*   className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary" */}
      {/* > */}
      {/*   Vaults */}
      {/* </Link> */}
      {/* <Link
        href="/notes"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Notes
      </Link> */}
    </nav>
  );
}
