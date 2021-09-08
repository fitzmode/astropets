import React from "react";
import { injected } from "../lib/connectors";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../lib/hooks";

import useStepper from "use-stepper";
import web3 from "../ethereum/web3";
import { Box, Button } from "@chakra-ui/react";

import AppContract from "../output/Astropets.json";

const min = 1;
const defaultValue = 1;
const max = 20;

enum ConnectorNames {
  Injected = "Injected",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};
function MintComponent() {
  const [supply, setTotalSupply] = React.useState(0);

  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  const [instance, setInstance] = React.useState<any>(null);

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  React.useEffect(() => {
    if (instance) {
      const getSupply = async () => {
        const totalSupply = await instance.methods.totalSupply().call();
        console.log("Total supply", totalSupply);
        setTotalSupply(totalSupply);
      };

      getSupply();
    }
  }, [instance]);

  React.useEffect(() => {
    const init = async () => {
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      const instance = new web3.eth.Contract(
        // @ts-ignore
        AppContract,
        "0x8be49fb1442a46c5f1b691a668d16ba4dfca17e1"
      );

      //   setAccounts(accounts)

      setInstance(instance);
    };

    init();
  }, []);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);
  const currentConnector = connectorsByName["Injected"];
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  function validValueClosestTo(desiredNumericValue: number): string {
    return String(Math.min(max, Math.max(desiredNumericValue, min)));
  }

  function integerReducer(state, action) {
    const integerValue = parseInt(state.value, 10);
    switch (action.type) {
      case useStepper.actionTypes.increment: {
        return { value: validValueClosestTo(integerValue + 1) };
      }
      case useStepper.actionTypes.decrement: {
        return { value: validValueClosestTo(integerValue - 1) };
      }
      case useStepper.actionTypes.coerce: {
        if (Number.isNaN(integerValue)) {
          return { value: String(defaultValue) };
        }
        const newValue = validValueClosestTo(integerValue);
        if (newValue !== state.value) {
          return { value: newValue };
        }
        return state;
      }
      default:
        return useStepper.defaultReducer(state, action);
    }
  }

  const {
    getInputProps,
    getIncrementProps,
    getDecrementProps,
    value: count,
  } = useStepper({
    min,
    max,
    defaultValue,
    stateReducer: integerReducer,
  });

  const mint = async () => {
    try {
      if (!instance) {
        console.log("No instance");
        return;
      }
      if (!account)
        throw new Error(`No account selected. Try reauthenticating`);
      const amount = (0.03 * (count as any)).toFixed(2);
      const value = web3.utils.toWei(amount, "ether");

      const gas = (count) => {
        switch (true) {
          case Number(count) > 1 && Number(count) <= 3:
            return "250000";
          case Number(count) > 3 && Number(count) <= 6:
            return "450000";
          case Number(count) > 6 && Number(count) <= 9:
            return "600000";
          case Number(count) > 6 && Number(count) <= 9:
            return "600000";
          case Number(count) > 9 && Number(count) <= 12:
            return "750000";
          case Number(count) > 12 && Number(count) <= 15:
            return "850000";
          case Number(count) > 15:
            return "950000";
        }
      };
      await instance.methods.mint(count).send({
        from: account,
        gas: gas(count),
        value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const connect = async () => {
    try {
      setActivatingConnector(currentConnector);
      activate(connectorsByName["Injected"]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box
        style={{
          fontSize: "1.5rem",
          marginBottom: 15,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Get Your Pixel Bro
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 30,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 80,
              boxShadow: "0 0 0 2px #000",
            }}
          >
            <button
              {...getDecrementProps()}
              style={{
                height: 80,
                width: 50,
                borderWidth: 0,
                fontSize: 40,
                background: "transparent",
                border: "none",
                borderRight: "1px solid #000",
              }}
            >
              -
            </button>
            <input
              {...getInputProps()}
              style={{
                height: 80,
                width: 80,
                color: "#000",
                fontSize: 30,
                textAlign: "center",
                userSelect: "none",
                background: "transparent",
                cursor: "pointer",
                border: "none",
                borderWidth: 0,
              }}
              readOnly
            />
            <button
              style={{
                height: 80,
                width: 50,
                borderWidth: 0,
                border: "none",
                fontSize: 40,
                background: "transparent",
                cursor: "pointer",
                borderLeft: "1px solid #000",
              }}
              {...getIncrementProps()}
            >
              +
            </button>
          </Box>
        </Box>

        <Box
          style={{
            paddingLeft: 40,
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            height: 80,
          }}
        >
          <Box style={{ textAlign: "left" }}>
            <Box>Cost: 0.03 ETH + Gas Fees</Box>
            <Box>
              Total cost: {(0.03 * (count as any)).toFixed(2)} ETH + Gas Fees
            </Box>
          </Box>
        </Box>
      </Box>
      {!active && (
        <Button
          style={{
            appearance: "none",
            display: "inline-block",
            textAlign: "center",
            lineHeight: "inherit",
            textDecoration: "none",
            fontSize: "inherit",
            fontWeight: "bold",
            background: "blue",
            cursor: "pointer",

            border: 0,
            borderRadius: 4,
          }}
          // disabled={disabled}
          onClick={connect}
        >
          Connect With Metamask
        </Button>
      )}

      {active && (
        <Button
          style={{
            appearance: "none",
            display: "inline-block",
            textAlign: "center",
            lineHeight: "inherit",
            textDecoration: "none",
            fontSize: "inherit",
            fontWeight: "bold",
            background: "blue",
            cursor: "pointer",
            border: 0,
            borderRadius: 4,
          }}
          onClick={mint}
        >
          Mint Your Pixel Bro
        </Button>
      )}
    </Box>
  );
}

export default MintComponent;
