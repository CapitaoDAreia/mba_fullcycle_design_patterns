import ContractDatabaseRepository from "./infra/repository/ContractDatabaseRepository";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import GenerateInvoices from "./application/usecase/GenerateInvoices";
import JsonPresenter from "./infra/presenter/JsonPresenter";
import LoggerDecorator from "./application/decorator/LoggerDecorator";
import MainController from "./infra/http/MainController";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import Mediator from "./infra/mediator/Mediator";
import SendEmail from "./application/usecase/SendEmail";

const connection = new PgPromiseAdapter();
const contractRepository = new ContractDatabaseRepository(connection);
const mediator = new Mediator();
const sendEmail = new SendEmail();
mediator.on("InvoicesGenerated", async function (data: any) {
	await sendEmail.execute(data);
});

// GENERATE INVOICES
const generateInvoices = new GenerateInvoices(contractRepository, new JsonPresenter(), mediator)

//GENERATE INVOICES - Decorator Pattern Applied
const generateInvoicesDecorator = new LoggerDecorator(generateInvoices);

// HTTP SERVER - Comes from an adapter that will servs the MainController
const httpServer = new ExpressAdapter();

// CONTROLLER
new MainController(httpServer, generateInvoicesDecorator);

httpServer.listen(3000);