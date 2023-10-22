import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, Y as noop, q as text, r as claim_text, W as append_hydration, J as listen, a7 as component_subscribe, o as onMount, a as space, c as claim_space, d as transition_out, f as check_outros, g as transition_in, v as group_outros, y as create_component, z as claim_component, A as mount_component, B as destroy_component } from "../chunks/index.7f5fe353.js";
import { f as contractPrincipalCV, g as appDetails, h as getStacksNetwork, j as le, s as sbtcConfig } from "../chunks/stores.fc72d1a8.js";
import { C as CONFIG, e as explorerTxUrl } from "../chunks/utils.eacbc159.js";
import "../chunks/paths.de60f601.js";
function create_else_block$2(ctx) {
  let div;
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      t = text("Bootstrap DLC Manager");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Bootstrap DLC Manager");
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "inline-flex items-center gap-x-1.5 bg-primary-01 px-4 py-2 font-normal text-black rounded-xl border border-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 shrink-0");
      attr(div, "class", "text-base text-white font-extralight");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let a;
  let t;
  let a_href_value;
  return {
    c() {
      div = element("div");
      a = element("a");
      t = text("open in explorer");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true, target: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "open in explorer");
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = explorerTxUrl(
        /*txId*/
        ctx[0]
      ));
      attr(a, "target", "_blank");
      attr(div, "class", "text-base text-white font-extralight");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*txId*/
      1 && a_href_value !== (a_href_value = explorerTxUrl(
        /*txId*/
        ctx2[0]
      ))) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (
      /*txId*/
      ctx2[0]
    )
      return create_if_block$2;
    return create_else_block$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex gap-2 mb-2 items-center justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let txId;
  const registerContract = async () => {
    const options = {
      contractAddress: CONFIG.VITE_DLC_DEPLOYER,
      contractName: CONFIG.VITE_DLC_MANAGER_CID.split(".")[1],
      functionName: "register-contract",
      functionArgs: [
        contractPrincipalCV(CONFIG.VITE_DLC_SAMPLE_CID.split(".")[0], CONFIG.VITE_DLC_SAMPLE_CID.split(".")[1])
      ],
      appDetails: appDetails(),
      network: getStacksNetwork(),
      onFinish: (data) => {
        console.log("Stacks Transaction:", data.stacksTransaction);
        $$invalidate(0, txId = data.txId);
        console.log("Raw transaction:", data.txRaw);
      }
    };
    await le(options);
  };
  const click_handler = () => registerContract();
  return [txId, registerContract, click_handler];
}
class Bootstrap extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_else_block$1(ctx) {
  let div1;
  let div0;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "text-base text-white font-extralight");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let a;
  let t;
  let a_href_value;
  return {
    c() {
      div = element("div");
      a = element("a");
      t = text("open in explorer");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true, target: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "open in explorer");
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = explorerTxUrl(
        /*txId*/
        ctx[0]
      ));
      attr(a, "target", "_blank");
      attr(div, "class", "text-base text-white font-extralight");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*txId*/
      1 && a_href_value !== (a_href_value = explorerTxUrl(
        /*txId*/
        ctx2[0]
      ))) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (
      /*txId*/
      ctx2[0]
    )
      return create_if_block$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex gap-2 mb-2 items-center justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $$value));
  let txId;
  onMount(async () => {
  });
  return [txId];
}
class SetupDLC extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_else_block(ctx) {
  let bootstrap;
  let current;
  bootstrap = new Bootstrap({});
  return {
    c() {
      create_component(bootstrap.$$.fragment);
    },
    l(nodes) {
      claim_component(bootstrap.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(bootstrap, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(bootstrap.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(bootstrap.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(bootstrap, detaching);
    }
  };
}
function create_if_block(ctx) {
  let setupdlc;
  let current;
  setupdlc = new SetupDLC({});
  return {
    c() {
      create_component(setupdlc.$$.fragment);
    },
    l(nodes) {
      claim_component(setupdlc.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(setupdlc, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(setupdlc.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(setupdlc.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(setupdlc, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div7;
  let div6;
  let div5;
  let div4;
  let div1;
  let div0;
  let h1;
  let span;
  let t0;
  let t1;
  let t2;
  let h6;
  let t3_value = CONFIG.VITE_DLC_MANAGER_CID + "";
  let t3;
  let t4;
  let div3;
  let div2;
  let current_block_type_index;
  let if_block;
  let t5;
  let section;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$sbtcConfig*/
      ctx2[0].dlcContract.registered
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div7 = element("div");
      div6 = element("div");
      div5 = element("div");
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span = element("span");
      t0 = text("DLC");
      t1 = text(" Manager Contract");
      t2 = space();
      h6 = element("h6");
      t3 = text(t3_value);
      t4 = space();
      div3 = element("div");
      div2 = element("div");
      if_block.c();
      t5 = space();
      section = element("section");
      this.h();
    },
    l(nodes) {
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "DLC");
      span_nodes.forEach(detach);
      t1 = claim_text(h1_nodes, " Manager Contract");
      h1_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      h6 = claim_element(div0_nodes, "H6", { class: true });
      var h6_nodes = children(h6);
      t3 = claim_text(h6_nodes, t3_value);
      h6_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      if_block.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t5 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "strokeme-info");
      attr(h1, "class", "text-info");
      attr(h6, "class", "text-sm");
      attr(div0, "class", "");
      attr(div1, "class", "");
      attr(div2, "class", "");
      attr(div3, "class", "");
      attr(div4, "class", "flex flex-col gap-10");
      attr(div5, "class", "flex flex-col p-10 gap-10 items-start bg-gray-1000 border-[0.5px] border-gray-700 rounded-3xl");
      attr(div6, "class", "mx-auto max-w-4xl");
      attr(div7, "class", "mt-10 mx-auto flex flex-col justify-center");
      attr(section, "class", "");
    },
    m(target, anchor) {
      insert_hydration(target, div7, anchor);
      append_hydration(div7, div6);
      append_hydration(div6, div5);
      append_hydration(div5, div4);
      append_hydration(div4, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h1);
      append_hydration(h1, span);
      append_hydration(span, t0);
      append_hydration(h1, t1);
      append_hydration(div0, t2);
      append_hydration(div0, h6);
      append_hydration(h6, t3);
      append_hydration(div4, t4);
      append_hydration(div4, div3);
      append_hydration(div3, div2);
      if_blocks[current_block_type_index].m(div2, null);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, section, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        }
        transition_in(if_block, 1);
        if_block.m(div2, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      if_blocks[current_block_type_index].d();
      if (detaching)
        detach(t5);
      if (detaching)
        detach(section);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $sbtcConfig;
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
  return [$sbtcConfig];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
