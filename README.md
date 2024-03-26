# Describing the patterns used on the application

## GoF Adapter:
- Imagine that we need a controller in our application to receive HTTP requests, and to do this, we will use some framework. Now, is it correct to couple the controller to the framework? Assuming not, how can we decouple the controller from the framework? It's simple, if my controller expects to receive an interface, I can write an Adapter that implements that interface and encapsulates the execution of my framework. See an example in the diagram below:

<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_ee7f2c572f5ca181617ec69377afea24.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1711292860&Signature=kmJvXo%2BqZjZzrOf6bUT2lmvKxKQ%3D">

## GoF Strategy:
- Imagine that we need to generate invoices. We have several types of invoices that can be generated, each based on a different parameter. A big method with lots of if/else would be the most common approach to come to mind, but we have a cleaner and safer way to do this. We can define a factory that will create our invoice generator from a string. See an example in the diagram below:

<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_50d10ca122036fc38c8b9968d6544a0b.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1711297558&Signature=UySIzuWTuInVUFy2oXnwJwcBmaM%3D">

## GoF Mediator
- Imagine that we have two use cases. One of them is an invoice generator, the other is an email "sender". Now, imagine that every time an invoice is generated I also want to send an email to someone. Well, it would be easy to just import the email "sender" into the invoice generator and voilà, the problem is solved. But wait, wait... This could be the birth of a relationship between components that will contribute to the rot of your system. And to solve this, we have Mediator.

Instead of coupling two use cases, we can use a mediator to orchestrate communication between the two or more use cases that need to send an email.

Let's see:

<img src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_b830af090f00b6f7ea8d0ebfbfc7ae1e.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1711418395&Signature=3%2BbwYMjfGaGa3%2FFQ7BKZSVW2lRk%3D">