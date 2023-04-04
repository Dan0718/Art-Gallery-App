import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

describe("Layout", () => {
  it("renders navigation and children components", () => {
    const ChildComponent = () => <div>Child Component</div>;
    render(
      <Layout>
        <ChildComponent />
      </Layout>
    );

    const navigation = screen.getByRole("navigation");
    const childComponent = screen.getByText("Child Component");

    expect(navigation).toBeInTheDocument();
    expect(childComponent).toBeInTheDocument();
  });
});
